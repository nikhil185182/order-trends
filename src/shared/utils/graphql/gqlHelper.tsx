import { useQuery } from "@apollo/client";
import { COMPANIES_QUERY, GETSPECIFICCOMPANIESDATA_QUERY, INACTIVEUSERS_QUERY, NEW_USER_QUERY } from "./queries";
import { NewUsersDTO } from "../../dto/newUsersDto";
import { useAppSelector } from "../redux/selectors/hooks";
import { newusertype } from "../../dto/newUsersDto";
import { companiesList, company, fres } from "../../dto/companyLevelOrderDTO";
import { getInactiveUsersData, Li2 } from "../../dto/InactiveUsersDTO";



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



  
  export  const DataFromGraphqlUser = (): getInactiveUsersData[] => {
    const inputDays = useAppSelector(state=>state.InactiveUsers.Date);
    const { loading, error, data } = useQuery<Li2>(INACTIVEUSERS_QUERY, {
      variables: { input : inputDays }
    })
    if (data) {
    const li2: getInactiveUsersData[] | undefined = data?.inactiveusers;
  
    var original: getInactiveUsersData[] = [];
  
    li2?.map((e: getInactiveUsersData) => {
      original.push(e);
    })
    console.log(original);
    return original;
  
  } else if (loading) {
      console.log("Data is Loading")
      return []
  }
  else {
      console.log(`Error ${error?.message}`)
      return []
  }
  }
  
    

  