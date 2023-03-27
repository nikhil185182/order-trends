import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { OrderTrendDto, gType } from '../shared/dto/orderTrendDto';
import { ATTEMPTED_ORDERS_LABEL, BLUE, COMPLETED_ORDERS_LABEL, GRAPH_DUMMY_DATA, GREEN, ORANGE, TOTAL_ORDERS_LABEL } from '../shared/global_constants';
import { ORDERTREND_LINE_GRAPH_OPTIONS,ORDERTREND_BAR_GRAPH_OPTIONS } from '../shared/config';
import '../shared/css/NavBar.css';
import { useAppSelector } from '../shared/utils/redux/selectors/hooks';
import { selectOrderTrendData } from '../shared/utils/redux/selectors/orderTrendSelector';
import { Radio,FormControlLabel } from '@mui/material';
import { CHART_CUSTOMISE, DAYS_CUSTOMISE, STATISTICS_GRAPH, STATISTICS_TAB } from '../shared/styledComponents/orderTrendComponents';

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

    const orderList: OrderTrendDto[] = useAppSelector(selectOrderTrendData);
    var Ddata: OrderTrendDto[] = [];

    const [graphData, SetGraphData] = useState<gType>(GRAPH_DUMMY_DATA);

    const btns = document.querySelectorAll('.btn_class');

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

    function updateDays(days: number) {
        Ddata.length = 0;
        const initIndex = orderList.length - 1 - days >= 0 ? orderList.length - 1 - days : 0;
        Ddata = orderList.slice(initIndex, orderList.length - 1);
        console.log("days" + days, Ddata);
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

    useEffect(() => { updateDays(30) }, [orderList]);

    const handleBarClick = () => SetLine(false);
    const handleLineClick = () => SetLine(true);


    return (
        <STATISTICS_TAB>
            <STATISTICS_GRAPH>
                {isLine ? <Line options={ORDERTREND_LINE_GRAPH_OPTIONS} data={graphData} /> : <Bar options={ORDERTREND_BAR_GRAPH_OPTIONS} data={graphData} />}
            </STATISTICS_GRAPH>
            <CHART_CUSTOMISE>
                <FormControlLabel control={<Radio style={{ color: '#54B948'}} onClick={handleLineClick} checked={isLine} />} label={"Line Chart"} />
                <FormControlLabel control={<Radio style={{ color: '#54B948'}} onClick={handleBarClick} checked={!isLine} />} label="Bar Chart" />
            </CHART_CUSTOMISE>
            <DAYS_CUSTOMISE>
                <button className='btn_class inactive' onClick={() => updateDays(865)}>865 Days</button>
                <button className='btn_class inactive' onClick={() => updateDays(365)}>365 Days</button>
                <button className='btn_class inactive' onClick={() => updateDays(180)}>180 Days</button>
                <button className='btn_class inactive' onClick={() => updateDays(90)}>90 Days</button>
                <button className='btn_class inactive' onClick={() => updateDays(60)}>60 Days</button>
                <button className='btn_class  active' onClick={() => updateDays(30)}>30 Days</button>
                <button className='btn_class inactive' onClick={() => updateDays(15)}>15 Days</button>
            </DAYS_CUSTOMISE>
        </STATISTICS_TAB>
    )
}

export default Statistics;