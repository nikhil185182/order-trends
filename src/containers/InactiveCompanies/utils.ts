import dayjs, { Dayjs } from "dayjs";

export const SUBMIT_BUTTON = "SUBMIT";
export const value = dayjs().subtract(30, "day");
export const DATE_LABEL = "Select a Date";
export const XTEXT = "Months";
export const YTEXT = "Number of Inactive Companies";


export const DateToStringFormat = (newValue : Dayjs|null) => {
    const monthVal: number = newValue?.get('month')! + 1;
    const mVal: string = monthVal < 10 ? '0' + monthVal : monthVal.toString();
    var val: string = newValue?.get('year').toString()! + '-' + mVal + '-' + newValue?.get('date').toString()!;
    return val;
}
