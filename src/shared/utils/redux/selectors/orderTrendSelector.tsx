import { RootState}  from "../store";

export const selectOrderTrendData = (state : RootState) => state.orderTrend.Data;  
export const getOrderListData =  (state : RootState) => state.orderTrend.orderDateList;

