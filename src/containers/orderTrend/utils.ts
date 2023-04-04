import { OrdersListType, Orders, OrderTrendGQLResponse} from "./models";

export const OrderTrendUtil = (response : OrderTrendGQLResponse)=>{
    const tempList: Orders[] = response?.ordertrend;
    var finalList: Orders[] = [];
    tempList?.map((e: Orders) => {finalList.push(e);})
    return finalList;
}