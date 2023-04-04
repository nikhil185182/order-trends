import { GQL_ResponseType, Orders} from "./models";

export const OrderTrendUtil = (data : GQL_ResponseType)=>{
    const tempList: Orders[] = data?.ordertrend!;
    var finalList: Orders[] = [];
    tempList?.map((e: Orders) => {finalList.push(e);})
    return finalList;
}