import {
  ATTEMPTED_ORDERS_LABEL,
  ORANGE,
  COMPLETED_ORDERS_LABEL,
  BLUE,
  TOTAL_ORDERS_LABEL,
  GREEN,
} from "../../shared/global_constants";
import { Orders, OrderTrendGQLResponse } from "./models";

export const OrderTrendUtil = (response: OrderTrendGQLResponse) => {
  const tempList: Orders[] = response?.getLastDays;
  var finalList: Orders[] = [];
  tempList?.forEach((e: Orders) => {
    finalList.push(e);
  });
  return finalList;
};

export const setGraphObject = (data: Orders[]) => {
  return {
    labels: data.map((item) => item.OrderDate.toLocaleString().slice(0, 10)),
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
