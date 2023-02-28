import { useQuery } from "@apollo/client";
import { GQL_ResponseType, OrderTrendDto } from "../../dto/orderTrendDto";
import { ORDERTREND_QUERY } from "./queries";
import { DAYS } from "../../config";

export function OrderTrendUtil(){
    const {data} = useQuery<GQL_ResponseType>(ORDERTREND_QUERY, {variables: { input: DAYS }});
    const tempList: OrderTrendDto[] = data?.ordertrend!;
    var finalList: OrderTrendDto[] = [];
    tempList?.map((e: OrderTrendDto) => {finalList.push(e);})
    return finalList;
}