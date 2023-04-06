import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { FormControl, Select, MenuItem, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import { Dialog, DialogContent } from "@mui/material";
import styled from "styled-components";
import { ChartEvent, ActiveElement, ChartData, ChartItem } from "chart.js";
import { Wrapper, Dropdown, ChartContainer } from "../InactiveCustomers/styledComponents";





const InactiveGraph = () => {
  const data = useAppSelector((state) => state.InactiveUsers.GQL_list);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [yearOptions, setYearOptions] = useState<number[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [companiesList, setCompaniesList] = useState<
    { CompanyName: String; LastOrderDate: string }[]
  >([]);

  useEffect(() => {
    const years: number[] = [];
    Object.values(data).forEach((company) => {
      const companyYear = Number(company.Months.split(" ")[1]);
      if (!years.includes(companyYear)) {
        years.push(companyYear);
      }
    });
    years.sort((a, b) => b - a);
    setYearOptions(years);
    setSelectedYear(years[0] || null);
  }, [data]);

  

  const Handleclickes = (event: ChartEvent, chartelement: ActiveElement[]) => {
    if (chartelement.length >= 1) {
      const clickedBar = chartelement[0];
      const monthIndex = clickedBar.index;
      const month = chartData.labels[monthIndex];
      const filteredData = Object.values(data).filter((company) => {
        const companyMonth = company.Months.split(" ")[0];
        const companyYear = Number(company.Months.split(" ")[1]);
        return companyMonth === month && companyYear === selectedYear;
      });
      const companies = filteredData.map((company) => ({
        CompanyName: company.CompanyName,
        LastOrderDate: company.LastOrderDate.toString().slice(0, 10),
      }));
      setCompaniesList(companies);
      console.log(companies);
      setDrawerOpen(true);
    }
  };
  





  const filteredData = Object.values(data).filter((company) => {
    const companyYear = Number(company.Months.split(" ")[1]);
    return companyYear === selectedYear;
  });

  const monthCounts: { [key: string]: number } = {};

  filteredData.forEach((company) => {
    const month = company.Months.split(" ")[0];
    monthCounts[month] = (monthCounts[month] || 0) + 1;
  });


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
    onClick: Handleclickes,
  };


  return (
    <Wrapper>
      <h2>Inactive Companies by Month</h2>
      <FormControl>
        <Dropdown>
          <Select
            value={selectedYear || ""}
            onChange={(e: { target: { value: any; }; }) => setSelectedYear(Number(e.target.value))}
            style={{ width: 150 }} 
          >
            {yearOptions.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>

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