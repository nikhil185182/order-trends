import { Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import { useAppSelector } from '../../shared/utils/redux/Selectors/hooks';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ChartData, ChartEvent, ActiveElement } from 'chart.js';

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

const InactiveChartdisplay = () => {
    const [IsBar, SetBar] = useState(true);
    const handleBarClick = () => SetBar(true);
    const handleLineClick = () => SetBar(false);
    const data30 = useAppSelector((state) => state.InactiveUsers.inactiveUsers30);
    const data60 = useAppSelector((state) => state.InactiveUsers.inactiveUsers60);
    const data90 = useAppSelector((state) => state.InactiveUsers.inactiveUsers90);
    const data120 = useAppSelector((state) => state.InactiveUsers.inactiveUsers120);
    const Ddata = useAppSelector((state)=>state.InactiveUsers.inactiveUsers);
    console.log(Ddata);
    const inputDays = useAppSelector(state=>state.InactiveUsers.Days);
    const data = [
        {
            Days: 120,
            Value: data120.length,
        },
        {
            Days: 90,
            Value: data90.length,
        },
        {
            Days: 60,
            Value: data60.length,
        },
        {
            Days: 30,
            Value: data30.length,
        }
    ]
    data.push({Days:inputDays,Value:Ddata.length,});
    data.sort((a, b) => b.Days - a.Days);
    console.log(data);
    
    const labels = data.map((item) => item.Days);
    const graphData = {
        labels,
        datasets: [
            {
                label: "Companies",
                data: data.map((item) => item.Value),
                borderColor: '#55B74E',
                backgroundColor: '#55B74E'
            }
        ]
    };
    const GRAPH_OPTIONS = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                },
                title: {
                  display: true,
                  text:"Days"
                }
            },
            y: {
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text:"Inactive Users"
                }
            }
        },
        plugins: {
            label:false,
            legend: {
              position:"top" as const,
            },
            title: {
              display: false,
              text: "Inactive Users",
              fontSize:100,
            },
          },
    };
    
    return (
        <div>
            {IsBar ? <Bar options={GRAPH_OPTIONS} data={graphData} /> : <Line options={GRAPH_OPTIONS} data={graphData} />}
            <Button className='Line_btn' onClick={handleLineClick} variant="outlined">Line Chart</Button>
            <Button className='bar_btn' onClick={handleBarClick} variant="outlined">Bar Chart</Button>
        </div>
    )
}

export default InactiveChartdisplay
