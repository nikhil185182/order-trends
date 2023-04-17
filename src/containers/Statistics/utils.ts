import {
  ATTEMPTED_ORDERS_LABEL,
  ORANGE,
  COMPLETED_ORDERS_LABEL,
  BLUE,
  TOTAL_ORDERS_LABEL,
  GREEN,
} from "../../shared/global_constants";
import { Orders } from "../OrderTrend/models";

export const getSlicedDays = (orderList : Orders[],days : number) =>{
    const index =orderList.length - 1 - days >= 0 ? orderList.length - 1 - days : 0;
    const data = orderList.slice(index, orderList.length - 1);
    return data;
};

export const getDaysLabel = (days: number) => {
  return days + " Days";
};

export const setGraphObject = (data: Orders[]) => {
  return {
    labels: data.map((item) => item.OrderDate.toLocaleString().slice(0,10)),
    datasets: [
      {
        label: ATTEMPTED_ORDERS_LABEL,
        data: data.map((item) => item.AttemptedOrders),
        borderColor: ORANGE,
        backgroundColor: ORANGE,
      },
      {
        label: COMPLETED_ORDERS_LABEL,
        data: data.map((item) => item.CompletedOrders),
        borderColor: BLUE,
        backgroundColor: BLUE,
      },
      {
        label: TOTAL_ORDERS_LABEL,
        data: data.map((item) => item.TotalOrders),
        borderColor: GREEN,
        backgroundColor: GREEN,
      },
    ],
  };
};
