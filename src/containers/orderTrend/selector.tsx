import { RootState}  from "../../shared/utils/redux/store";

export const selectOrderTrendData = (state : RootState) => state.orderTrend.Data;  
export const getOrderListData =  (state : RootState) => state.orderTrend.orderDateList;

