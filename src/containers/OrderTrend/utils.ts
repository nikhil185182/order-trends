import { Orders, OrderTrendGQLResponse} from "./models";

export const OrderTrendUtil = (response : OrderTrendGQLResponse)=>{
    const tempList: Orders[] = response?.getLastDays;
    var finalList: Orders[] = [];
    tempList?.forEach((e: Orders) => {finalList.push(e)})
    return finalList;
}