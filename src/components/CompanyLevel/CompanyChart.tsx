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
import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { GRAPH_OPTIONS } from "../../shared/config";
import { companyLevel } from "../../shared/dto/companyLevelOrderDTO";
import { ReqCompanies } from "../../shared/utils/redux/companySelector";
import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";

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

const TotalOrdersVsDateGraph = () => {
  const data1: companyLevel[] = [
    {
      Company: "",
      Date: "",
      TotalOrders: 0,
      CompletedOrders: 0,
      AttemptedOrders: 0,
    },
  ];

  const data: companyLevel[] = useAppSelector(ReqCompanies) || data1;
  const y_label: string = useAppSelector((state) => state.company.label);

  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    hoverRadius:8,
    scales: {
        x: {
            grid: {
                display: true
            },
            title:{
                display:true,
                text:"Order Dates"
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: true
            },
            title:{
                display:true,
                text:y_label
            }
        }
    },
    plugins: {
        legend: {
            position: 'top' as const,
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

  const helper = (label:string)=>{

    if(label=="Total Orders"){
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
    }
    else if(label=="Attempted Orders"){
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
    }
    else{
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

  }

  const chartData =  
    data[0].Company === data1[0].Company
      ? {
          labels: [],
          datasets: [],
        }
      : helper(y_label)

  useEffect(
    () => {
    }, 
    [chartData]);

  return (
    <Line data={chartData} width={500} height={500} options={GRAPH_OPTIONS} />
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

export default TotalOrdersVsDateGraph;
