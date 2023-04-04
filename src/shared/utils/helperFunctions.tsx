import { Dayjs } from "dayjs";
import { OrderTrendDto } from "../../containers/OrderTrend/orderTrendDto";
import { useAppSelector } from "./redux/selectors/hooks";

export const getDateFromDatePicker = (newValue : Dayjs|null)=>{
    const monthVal : number = newValue?.get('month')! + 1;
        const mVal : string = monthVal<10?'0'+monthVal:monthVal.toString();
        const dayVal : number = newValue?.get('date')!;
        const dVal : string = dayVal<10?'0'+dayVal:dayVal.toString();
        const val: string = newValue?.get('year').toString()! + '-' + mVal + '-' + dVal;
    return val;
}


export const getOrderListMap = (orderList : OrderTrendDto[]) =>{
    const mapList = new Map<string,OrderTrendDto>();
    orderList.map((e : OrderTrendDto)=>{
        e = {...e,OrderDate : e.OrderDate.slice(0,10)}
        mapList.set(e.OrderDate.toString(),e);
    });   
    return mapList;
}
export const ConvertedfromandToDates=()=>{
    const fromdate = useAppSelector((state) => state.NewUser.fromDate);
  const todate = useAppSelector((state) => state.NewUser.toDate);
  let from = fromdate.split("/");

  let from_final = new Date(
    Number(from[2]),
    Number(from[0]) - 1,
    Number(from[1])
  );
  let to = todate.split("/");

  let to_final = new Date(Number(to[2]), Number(to[0]) - 1, Number(to[1]));
  return [from_final,to_final]

}