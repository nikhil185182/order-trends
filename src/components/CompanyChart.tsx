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
import { GRAPH_OPTIONS } from "../shared/config";
import { companyLevel } from "../shared/dto/companyLevelOrderDTO";
import { DUMMY_DATA } from "../shared/global_constants";
import { useAppSelector } from "../shared/utils/redux/hooks";
import { ReqCompanies } from "../shared/utils/redux/selectors/companySelector";

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
  const data1: companyLevel[] = [];
  const data: companyLevel[] |null = useAppSelector(ReqCompanies) || data1;

  const groupedData = data.reduce<GroupedData>((result, currentValue) => {
    const { Company, ...rest } = currentValue;
    if (!result[Company]) {
      result[Company] = [];
    }
    result[Company].push({ Company, ...rest });
    return result;
  }, {});

  const [isfilled,setFilled] = useState(true)
  useEffect(()=>{
  if(data){
    setFilled(false)
  }
},[isfilled])

  const chartData = {
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


