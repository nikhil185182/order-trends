import { Dayjs } from "dayjs";

export const getDateToString = (newValue: Dayjs | null) => {
  const monthVal: number = newValue?.get("month")! + 1;
  const mVal: string = monthVal < 10 ? "0" + monthVal : monthVal.toString();
  const dayVal: number = newValue?.get("date")!;
  const dVal: string = dayVal < 10 ? "0" + dayVal : dayVal.toString();
  const val: string =
    newValue?.get("year").toString()! + "-" + mVal + "-" + dVal;
  return val;
};
