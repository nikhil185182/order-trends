import { Orders } from "../models";

export const getSlicedDays = (orderList: Orders[], days: number) => {
  const index =
    orderList.length - 1 - days >= 0 ? orderList.length - 1 - days : 0;
  const data = orderList.slice(index, orderList.length - 1);
  return data;
};

export const getDaysLabel = (days: number) => {
  return days + " Days";
};
