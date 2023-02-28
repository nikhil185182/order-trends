import { useSelector,useDispatch } from "react-redux";
import { RootState ,AppDispatch}  from "../store";
import { useAppSelector } from "./hooks";

export const selectOrderTrendData = (state : RootState) => state.orderTrend.Data;  
export const getOrderListData =  (state : RootState) => state.orderTrend.orderDateList;

