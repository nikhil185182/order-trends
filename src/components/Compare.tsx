import React from 'react';
import { getOrderListMap } from '../shared/utils/helperFunctions';
import { useAppSelector } from '../shared/utils/redux/selectors/hooks';
import { selectOrderTrendData } from '../shared/utils/redux/selectors/orderTrendSelector';
import CompareDatePicker from './CompareDatePicker';
import CompareBarGraph from './CompareBarGraph';
import { COMPARE_TAB } from '../shared/styledComponents/orderTrendComponents';


const Compare = () => {
    const orderList = useAppSelector(selectOrderTrendData);
    const orderMap = getOrderListMap(orderList);
    return (
        <COMPARE_TAB>
            <CompareDatePicker orderMap={orderMap} />
            <CompareBarGraph />
        </COMPARE_TAB>
    )
}

export default Compare;
