import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { ORDERTREND_BAR_GRAPH_OPTIONS } from '../shared/config'
import { gType } from '../shared/dto/orderTrendDto';
import { GRAPH_DUMMY_DATA, ATTEMPTED_ORDERS_LABEL, ORANGE, COMPLETED_ORDERS_LABEL, BLUE, TOTAL_ORDERS_LABEL, GREEN } from '../shared/global_constants';
import { useAppSelector } from '../shared/utils/redux/selectors/hooks';
import { getOrderListData } from '../shared/utils/redux/selectors/orderTrendSelector';
import { COMPARE_GRAPH } from '../shared/styledComponents/orderTrendComponents';

export default function CompareBarGraph() {

    const dateList = useAppSelector(getOrderListData);
    
    const [graphData, SetGraphData] = useState<gType>(GRAPH_DUMMY_DATA);

    useEffect(() => {
        var temp_graphData = {
            labels: dateList.map((item) => item.OrderDate.slice(0, 10)),
            datasets: [
                {
                    label: ATTEMPTED_ORDERS_LABEL,
                    data: dateList.map((item) => item.AttemptedOrders),
                    borderColor: ORANGE,
                    backgroundColor: ORANGE,
                },
                {
                    label: COMPLETED_ORDERS_LABEL,
                    data: dateList.map((item) => item.CompletedOrders),
                    borderColor: BLUE,
                    backgroundColor: BLUE,
                },
                {
                    label: TOTAL_ORDERS_LABEL,
                    data: dateList.map((item) => item.TotalOrders),
                    borderColor: GREEN,
                    backgroundColor: GREEN,
                },
            ],
        }
        SetGraphData(temp_graphData);
    }, [dateList]);

  return (
    <COMPARE_GRAPH>
        <Bar options={ORDERTREND_BAR_GRAPH_OPTIONS} data={graphData} />
    </COMPARE_GRAPH>
  )
}
