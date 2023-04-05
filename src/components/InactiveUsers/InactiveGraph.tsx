import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { FormControl, Select, MenuItem, DialogProps, Button, DialogActions, DialogContentText, DialogTitle } from "@mui/material";
import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import { Dialog, DialogContent } from "@mui/material";
import styled from "styled-components";
import { ChartEvent, ActiveElement, ChartData, ChartItem } from "chart.js";
import { toggleDrawer, updateCompaniesList, updatebarclickedDate } from "../../containers/newCustomers/Reducer";

const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left:60px;
`;

const ChartContainer = styled.div`
  height: 500px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const InactiveGraph = () => {
  const data = useAppSelector((state) => state.InactiveUsers.GQL_list);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [yearOptions, setYearOptions] = useState<number[]>([]);

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
  };
  

return (
  <Wrapper>
    <h2>Inactive Companies by Month</h2>
    <FormControl>
      <Select
        value={selectedYear || ""}
        onChange={(e: { target: { value: any; }; }) => setSelectedYear(Number(e.target.value))}
      >
        {yearOptions.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <ChartContainer>
      <Bar data={chartData} options={options} />
    </ChartContainer>
  </Wrapper>
);

};

export default InactiveGraph;