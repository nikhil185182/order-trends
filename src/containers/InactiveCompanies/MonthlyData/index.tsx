import React, { useState, useEffect, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { FormControl, Select, MenuItem, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useAppSelector } from "../../../shared/utils/redux/hooks";
import { ChartEvent, ActiveElement } from "chart.js";
import { Wrapper, ChartContainer, Dropdown, StyledDropdown } from "./StyledComponents";
import { inactivegraphSelector } from "./selector";

const InactiveGraph = () => {
  const data = useAppSelector(inactivegraphSelector);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [yearOptions, setYearOptions] = useState<number[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [companiesList, setCompaniesList] = useState<
    { CompanyName: String; LastOrderDate: string }[]
  >([]);

  useEffect(() => {
    const years: number[] = [];
    Object.values(data).forEach((company) => {
      const companyYear = Number(company.Year);
      if (!years.includes(companyYear)) {
        years.push(companyYear);
      }
    });
    years.sort((a, b) => b - a);
    setYearOptions(years);
    setSelectedYear(years[0] || null);
  }, [data]);

  // const filteredData = useMemo(() => {
  //   return Object.values(data).filter((company) => {
  //     const companyYear = Number(company.Year);
  //     return companyYear === selectedYear;
  //   });
  // }, [data, selectedYear]);

  // const monthCounts = useMemo(() => {
  //   const counts: { [key: string]: number } = {};
  //   filteredData.forEach((company) => {
  //     const month = company.Month;
  //     counts[month] = (counts[month] || 0) + 1;
  //   });
  //   return counts;
  // }, [filteredData]);


  const Handleclick = (event: ChartEvent, chartelement: ActiveElement[]) => {
    if (chartelement.length >= 1) {
      const clickedBar = chartelement[0];
      const monthIndex = clickedBar.index;
      const month = chartData.labels[monthIndex];
      const filteredData = Object.values(data).filter((company) => {
        const companyMonth = company.Month;
        const companyYear = Number(company.Year);
        return companyMonth === month && companyYear === selectedYear;
      });
      const companies = filteredData.map((company) => ({
        CompanyName: company.CompanyName,
        LastOrderDate: company.LastOrderDate.toString().slice(0, 10),
      }));
      setCompaniesList(companies);
      setDrawerOpen(true);
    }
  };


  const filteredData = Object.values(data).filter((company) => {
    const companyYear = Number(company.Year);
    return companyYear === selectedYear;
  });
  console.log(filteredData);

  const monthCounts: { [key: string]: number } = {};

  filteredData.forEach((company) => {
    const month:string = company.Month;
    monthCounts[month] = (monthCounts[month] || 0) + 1;
  });
  
  console.log(monthCounts);
 

  const chartData = {
    labels: Object.keys(monthCounts),
    datasets: [
      {
        label: `Inactive Companies in ${selectedYear}`,
        data: Object.values(monthCounts),
        backgroundColor: "#55B74E",
        borderColor: "#55B74E",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    hoverRadius: 8,
    scales: {
      x: {
        grid: {
          display: true,
        },
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Number of Inactive Companies",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    onClick: Handleclick,
  };


  return (
    <Wrapper>
      <h2>Inactive Companies by Month</h2>
      <FormControl>
        <Dropdown>
          <StyledDropdown
            value={selectedYear || ""}
            onChange={(e: { target: { value: any } }) =>
              setSelectedYear(Number(e.target.value))
            }
          >
            {yearOptions.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </StyledDropdown>

        </Dropdown>
      </FormControl>
      <ChartContainer>
        <Bar data={chartData} options={options} />
      </ChartContainer>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          {companiesList.map((company, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={company.CompanyName}
                secondary={`Last Order Date: ${company.LastOrderDate}`}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Wrapper>
  );

};

export default InactiveGraph;