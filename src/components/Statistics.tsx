import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ChartData } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { OrderTrendDto, gType } from '../shared/dto/orderTrendDto';
import { ATTEMPTED_ORDERS_LABEL, BLUE, COMPLETED_ORDERS_LABEL, GRAPH_DUMMY_DATA, GREEN, ORANGE, TOTAL_ORDERS_LABEL } from '../shared/global_constants';
import { GRAPH_OPTIONS } from '../shared/config';
import '../shared/css/NavBar.css';
import { useAppSelector } from '../redux/selectors/hooks';
import { selectOrderTrendData } from '../redux/selectors/orderTrendSelector';

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


const Statistics = () => {
    const [isLine, SetLine] = useState(true);

    const orderList : OrderTrendDto[] = useAppSelector(selectOrderTrendData);
    var Ddata: OrderTrendDto[] = [];

    const [graphData, SetGraphData] = useState<gType>(GRAPH_DUMMY_DATA);

    const btns = document.querySelectorAll('.btn_class');

    function updateDays(days: number) {

        btns.forEach((btn1) => {
            btn1.addEventListener('click', () => {
                btns.forEach((btn2) => {
                    btn2.classList.remove('active');
                    btn2.classList.add('inactive');
                });
                btn1.classList.remove('inactive');
                btn1.classList.add('active');
            });
        });

        Ddata.length = 0;
        Ddata = orderList.slice(orderList.length - 1 - days, orderList.length - 1);
        var temp_graphData = {
            labels: Ddata.map((item) => item.OrderDate.slice(0, 10)),
            datasets: [
                {
                    label: ATTEMPTED_ORDERS_LABEL,
                    data: Ddata.map((item) => item.AttemptedOrders),
                    borderColor: ORANGE,
                    backgroundColor: ORANGE,
                },
                {
                    label: COMPLETED_ORDERS_LABEL,
                    data: Ddata.map((item) => item.CompletedOrders),
                    borderColor: BLUE,
                    backgroundColor: BLUE,
                },
                {
                    label: TOTAL_ORDERS_LABEL,
                    data: Ddata.map((item) => item.TotalOrders),
                    borderColor: GREEN,
                    backgroundColor: GREEN,
                },
            ],
        }
        SetGraphData(temp_graphData);
    }

    useEffect(() => {
        updateDays(30);
    }, [orderList]);

    const handleBarClick = () => SetLine(false);
    const handleLineClick = () => SetLine(true);


    return (
        <div className='stats_bar'>
            {isLine ? <Line options={GRAPH_OPTIONS} data={graphData} /> : <Bar options={GRAPH_OPTIONS} data={graphData} />}
            <div className="chartCust">
                <Button variant={isLine ? "contained" : "outlined"} onClick={handleLineClick} style={{ backgroundColor: isLine ? "#54B948" : "#FFFFFF", color: isLine ? "#FFFFFF" : "#54B948", borderBlockColor: "#54B948" }}>Line Chart</Button>
                <Button variant={!isLine ? "contained" : "outlined"} onClick={handleBarClick} style={{ backgroundColor: !isLine ? "#54B948" : "#FFFFFF", color: !isLine ? "#FFFFFF" : "#54B948", borderBlockColor: "#54B948" }}>Bar Chart</Button>
            </div>
            <div className="daysCust">
                <button className='btn_class inactive' onClick={()=>updateDays(865)}>865 days</button>
                <button className='btn_class inactive' onClick={()=>updateDays(365)}>365 days</button>
                <button className='btn_class inactive' onClick={()=>updateDays(180)}>180 days</button>
                <button className='btn_class inactive' onClick={()=>updateDays(90)}>90 days</button>
                <button className='btn_class inactive' onClick={()=>updateDays(60)}>60 days</button>
                <button className='btn_class active' onClick={() => updateDays(30)}>30 days</button>
                <button className='btn_class inactive' onClick={() => updateDays(15)}>15 days</button>
            </div>
        </div>
    )
}

export default Statistics;