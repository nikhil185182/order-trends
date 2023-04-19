import dayjs, { Dayjs } from "dayjs";
import { Orders } from "../models";

export const getDateToString = (newValue: Dayjs | null) => {
  const monthVal: number = newValue?.get("month")! + 1;
  const mVal: string = monthVal < 10 ? "0" + monthVal : monthVal.toString();
  const dayVal: number = newValue?.get("date")!;
  const dVal: string = dayVal < 10 ? "0" + dayVal : dayVal.toString();
  const val: string =
    newValue?.get("year").toString()! + "-" + mVal + "-" + dVal;
  return val;
};

export const getMaxDate = (orderData : Orders[]) =>{
    const maxDate = new Date(orderData[orderData.length - 1].OrderDate);
    return dayjs(maxDate);
}

export const getMinDate = (orderData : Orders[]) =>{
  const maxDate = new Date(orderData[0].OrderDate);
  return dayjs(maxDate);
}