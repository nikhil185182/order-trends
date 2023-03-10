import { useQuery } from "@apollo/client";
import { GQL_ResponseType, OrderTrendDto } from "../../dto/orderTrendDto";
import { NEW_USER_QUERY, ORDERTREND_QUERY } from "./queries";
import { DAYS } from "../../config";
import { NewUsersDTO } from "../../dto/newUsersDto";
import { useAppSelector } from "../redux/selectors/hooks";
import { newusertype } from "../../dto/newUsersDto";

export function OrderTrendUtil(){
    const {data} = useQuery<GQL_ResponseType>(ORDERTREND_QUERY, {variables: { input: DAYS }});
    const tempList: OrderTrendDto[] = data?.ordertrend!;
    var finalList: OrderTrendDto[] = [];
    tempList?.map((e: OrderTrendDto) => {finalList.push(e);})
    return finalList;
}

export const DataFromGraphql = ():NewUsersDTO[] => {

    let Newuserquery = NEW_USER_QUERY;
   
    
    const inputfromdate=useAppSelector(state=>state.NewUser.fromDate)
   
    const inputtodate=useAppSelector(state=>state.NewUser.toDate)
    
    const { loading, error, data } = useQuery<newusertype>(Newuserquery,
        {
            variables:{Fromdate:new Date(inputfromdate),Todate:new Date(inputtodate)}
        })
    if (data) {
        return data.NewUsersData

    } else if (loading) {
        console.log("Data is Loading")
        return []
    }
    else {
        console.log(`Error ${error?.message}`)
        return []
    }
}
    

  