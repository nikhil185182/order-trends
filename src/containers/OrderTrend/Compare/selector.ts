import { RootState } from "../../../shared/utils/redux/store";

export const getOrderListData = (state: RootState) =>
  state.orderTrend.compare.orderDateList;
export const getOrderTrendData = (state: RootState) =>
  state.orderTrend.statistics.Data;
