import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { useCallback, useEffect, useMemo, useState } from "react";
  import { Line } from "react-chartjs-2";
  import { ReqCompanies } from "../selector";
  import { useAppDispatch, useAppSelector } from "../../../shared/utils/redux/hooks";
  import { ChartComponent, RadioButtonComponent } from "../styledComponents";
  import { companyLevel } from "../models";
import { setLabel } from "../reducer";
import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
  
  interface GroupedData {
    [key: string]: companyLevel[];
  }
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const data1: companyLevel[] = [
    {
      Company: "",
      Date: "",
      TotalOrders: 0,
      CompletedOrders: 0,
      AttemptedOrders: 0,
    },
  ];
  
  const CompanyChartComponent = () => {
    const data: companyLevel[] = useAppSelector(ReqCompanies) || data1;
    const y_label: string = useAppSelector((state) => state.company.label);
    const dispatch = useAppDispatch()
    const [value, setValue] =useState('Total Orders');
    const width = window.innerWidth;
   
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    }
    useEffect(()=>{
      dispatch(setLabel(value));
    },[value])
    useEffect(()=>{
      
    },[width])
  
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
            text: "Order Dates",
            font : {
              size : 15,
            },
            color : 'black'
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            display: true,
          },
          title: {
            display: true,
            text: y_label,
            font : {
              size : 15,
            },
            color : 'black'
          },
        },
      },
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: false,
        },
      },
    };
  
    const groupedData = data.reduce<GroupedData>((result, currentValue) => {
      const { Company, ...rest } = currentValue;
      if (!result[Company]) {
        result[Company] = [];
      }
      result[Company].push({ Company, ...rest });
      return result;
    }, {});
  
    const helper =useCallback((label: string) => {
      if (label === "Total Orders") {
        return {
          labels: [...new Set(data.map((d) => d.Date))],
          datasets: Object.keys(groupedData).map((Company) => ({
            label: Company,
            data: groupedData[Company].map((d) => d.TotalOrders),
            fill: true,
            borderColor: getRandomColor(),
            lineTension: 0.25,
            radius: 7.5,
          })),
        };
      } else if (label === "Attempted Orders") {
        return {
          labels: [...new Set(data.map((d) => d.Date))],
          datasets: Object.keys(groupedData).map((Company) => ({
            label: Company,
            data: groupedData[Company].map((d) => d.AttemptedOrders),
            fill: true,
            borderColor: getRandomColor(),
            lineTension: 0.25,
            radius: 7.5,
          })),
        };
      } else {
        return {
          labels: [...new Set(data.map((d) => d.Date))],
          datasets: Object.keys(groupedData).map((Company) => ({
            label: Company,
            data: groupedData[Company].map((d) => d.CompletedOrders),
            fill: true,
            borderColor: getRandomColor(),
            lineTension: 0.25,
            radius: 7.5,
          })),
        };
      }
    },[data,groupedData])
  
    const chartData = useMemo(() => {
      return data[0].Company === data1[0].Company
        ? {
            labels: [],
            datasets: [],
          }
        : helper(y_label);
    }, [helper,data,y_label]);
  
    useEffect(() => {}, [chartData]);
  
    return (
        <>
        <ChartComponent>
        <Line data={chartData} width={500} height={500} options={options} />
        </ChartComponent>
        <RadioButtonComponent>
        {width > 440 ? (
       <FormControl className='fc-rb'>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value="Total Orders"  checked={value==="Total Orders"} control={<Radio style={{ color: "#54B948" }} />} label="Total Orders" />
        <FormControlLabel value="Completed Orders" checked={value==="Completed Orders"} control={<Radio style={{ color: "#54B948" }}/>} label="Completed Orders" />
        <FormControlLabel value="Attempted Orders" checked={value==="Attempted Orders"} control={<Radio style={{ color: "#54B948" }}/>} label="Attempted Orders" />
      </RadioGroup>
    </FormControl>)
    :
    <FormControl className='fc-rb'>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
        color="green"
      >
        <FormControlLabel value="Total Orders"  checked={value==="Total Orders"} control={<Radio style={{ color: "#54B948" }}/>} label="Total Orders" />
        <FormControlLabel value="Completed Orders" checked={value==="Completed Orders"} control={<Radio style={{ color: "#54B948" }}/>} label="Completed Orders" />
        <FormControlLabel value="Attempted Orders" checked={value==="Attempted Orders"} control={<Radio style={{ color: "#54B948" }}/>} label="Attempted Orders" />
      </RadioGroup>
    </FormControl>
    } 
    </RadioButtonComponent>
        </>
      
    );
  };
  
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  export default CompanyChartComponent;
  