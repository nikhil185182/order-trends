import { Button } from '@mui/material';
import React, { useState } from 'react';
import Statistics from '../../components/Statistics';
import Compare from '../../components/Compare';
import { useAppSelector } from '../../redux/selectors/hooks';
import { selectOrderTrendData } from '../../redux/selectors/orderTrendSelector';
import '../../shared/css/NavBar.css';

const OrderTrend = ()=>{

    const orderList = useAppSelector(selectOrderTrendData);

    const [isStats, SetStats] = useState(true);

    const handleStatsClick = () => SetStats(true);

    const handleCompareClick = () => SetStats(false);

    return (
        <div className="order_trend">
            <div className="toggle_trend">
                <Button variant={isStats?"contained":"outlined"} style={{backgroundColor: isStats?"#54B948":"#FFFFFF",color: isStats?"#FFFFFF":"#54B948",borderBlockColor:"#54B948"}} onClick={handleStatsClick}>Statistics</Button>
                <Button variant={!isStats?"contained":"outlined"} style={{backgroundColor: !isStats?"#54B948":"#FFFFFF",color: !isStats?"#FFFFFF":"#54B948",borderBlockColor:"#54B948"}} onClick={handleCompareClick}>Customise & Compare</Button>
            </div>
            {isStats ? <Statistics/> : <Compare />}
        </div>
    )
}

export default OrderTrend;
