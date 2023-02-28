
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar, Line } from "react-chartjs-2";
import { GRAPH_OPTIONS } from '../shared/config';
import { companyLevel } from '../shared/dto/companyLevelOrderDTO';
import { useAppSelector } from '../shared/utils/redux/hooks';
import { ReqCompanies } from '../shared/utils/redux/selectors/companySelector';


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

const TotalOrdersVsDateGraph = ()=> {

        const data1: companyLevel[] = [
        { Company: "Company A", Date: "2022-01-01", TotalOrders: 10 },
        { Company: "Company A", Date: "2022-01-02", TotalOrders: 20 },
        { Company: "Company A", Date: "2022-01-03", TotalOrders: 15 },
        { Company: "Company B", Date: "2022-01-01", TotalOrders: 5 },
        { Company: "Company B", Date: "2022-01-02", TotalOrders: 10 },
        { Company: "Company B", Date: "2022-01-03", TotalOrders: 7.5 },
        { Company: "Company c", Date: "2022-01-01", TotalOrders: 7.5 },
        { Company: "Company c", Date: "2022-01-02", TotalOrders: 15 },
        { Company: "Company c", Date: "2022-01-03", TotalOrders: 11 },
      ];

    const data : companyLevel[] = useAppSelector(ReqCompanies)||data1;



  const groupedData = data.reduce<GroupedData>((result, currentValue) => {
    const { Company, ...rest } = currentValue;
    if (!result[Company]) {
      result[Company] = [];
    }
    result[Company].push({Company,...rest});
    return result;
  }, {});

  const chartData = {
    labels: [...(new Set(data.map((d) => d.Date)))],
    datasets: Object.keys(groupedData).map((Company) => ({
      label: Company,
      data: groupedData[Company].map((d) => d.TotalOrders),
      fill: false,
      borderColor: getRandomColor(),
      lineTension: 0.25,        
      radius: 7.5      
    })),
  };

  return <Line data={chartData} width={500} height={500} options={GRAPH_OPTIONS}/>;
}


function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default TotalOrdersVsDateGraph;


