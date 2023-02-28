import React, { useEffect, useState } from 'react'
import { OrderTrendDto, ReduxOrderDateListType, gType } from '../shared/dto/orderTrendDto';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Portal, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import '../shared/css/NavBar.css';
import { Bar } from 'react-chartjs-2';
import { GRAPH_OPTIONS } from '../shared/config';
import { ATTEMPTED_ORDERS_LABEL, BLUE, COMPLETED_ORDERS_LABEL, GRAPH_DUMMY_DATA, GREEN, ORANGE, TOTAL_ORDERS_LABEL } from '../shared/global_constants';
import { getDateFromDatePicker, getMaximumDateData, getOrderListMap } from '../shared/utils/helperFunctions';
import { useAppDispatch, useAppSelector } from '../redux/selectors/hooks';
import {getOrderListData, selectOrderTrendData } from '../redux/selectors/orderTrendSelector';
import { addOrderDateList } from '../redux/reducers/orderTrendReducer';
import CompareDatePicker from './CompareDatePicker';
import CompareBarGraph from './CompareBarGraph';


const Compare = () => {
    const orderList = useAppSelector(selectOrderTrendData);
    const orderMap = getOrderListMap(orderList);
    return (
        <div className="compareTab">
            <CompareDatePicker orderMap={orderMap}/>
            <CompareBarGraph/>
        </div>
    )
}

export default Compare;
