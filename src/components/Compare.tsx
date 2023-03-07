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
import { getDateFromDatePicker, getOrderListMap } from '../shared/utils/helperFunctions';
import { useAppSelector } from '../shared/utils/redux/selectors/hooks';
import { selectOrderTrendData } from '../shared/utils/redux/selectors/orderTrendSelector';
import { addOrderDateList } from '../shared/utils/redux/reducers/orderTrendReducer';
import CompareDatePicker from './CompareDatePicker';
import CompareBarGraph from './CompareBarGraph';
import styled from '@emotion/styled';


const Compare = () => {
    const orderList = useAppSelector(selectOrderTrendData);
    const orderMap = getOrderListMap(orderList);

const StyledButton = styled.div`
  font-size: 32px;
  color: white;
`;

    return (
        // <StyledButton><CompareBarGraph/></StyledButton>
        <div className="compareTab">
            <CompareDatePicker orderMap={orderMap} />
            <CompareBarGraph />
        </div>
    )
}

export default Compare;
