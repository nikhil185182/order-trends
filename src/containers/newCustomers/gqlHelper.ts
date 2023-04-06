import { useQuery } from "@apollo/client";
import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import { NewUsersDTO, newusertype } from "./models";
import { NEW_USER_QUERY } from "./queries";

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