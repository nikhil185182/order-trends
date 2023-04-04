import { Dayjs } from "dayjs";
import { Orders } from "../OrderTrend/models";

export const getDateFromDatePicker = (newValue: Dayjs | null) => {
    const monthVal: number = newValue?.get('month')! + 1;
    const mVal: string = monthVal < 10 ? '0' + monthVal : monthVal.toString();
    const dayVal: number = newValue?.get('date')!;
    const dVal: string = dayVal < 10 ? '0' + dayVal : dayVal.toString();
    const val: string = newValue?.get('year').toString()! + '-' + mVal + '-' + dVal;
    return val;
}


export const getOrderListMap = (orderList: Orders[]) => {
    const mapList = new Map<string, Orders>();
    orderList.map((e: Orders) => {
        e = { ...e, OrderDate: e.OrderDate.slice(0, 10) }
        mapList.set(e.OrderDate.toString(), e);
    });
    return mapList;
}