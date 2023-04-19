import { RootState } from "../../../shared/utils/redux/store";

export const selectOrderTrendData = (state: RootState) =>
  state.orderTrend.statistics.Data;
export const selectOrderTrendChart = (state: RootState) =>
  state.orderTrend.statistics.chartToggle;
export const selectOrderTrendDays = (state: RootState) =>
  state.orderTrend.statistics.days;
