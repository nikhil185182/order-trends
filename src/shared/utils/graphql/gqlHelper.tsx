import { useQuery } from "@apollo/client";
import { COMPANIES_QUERY, GETSPECIFICCOMPANIESDATA_QUERY, INACTIVEMONTHS_QUERY, INACTIVEUSERS_QUERY} from "./queries";

import { useAppSelector } from "../redux/selectors/hooks";
import { getInactiveUsersData, GQL_list, InactiveMonths, Li2 } from "../../dto/InactiveUsersDTO";








  
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
  
  export const InactiveUtil = (): InactiveMonths[] => {
    const { data } = useQuery<GQL_list>(INACTIVEMONTHS_QUERY, { variables: { input: 60 } });
    console.log(data);
    const tempResult: InactiveMonths[] = data?.inactivemonths ?? [];
    console.log(tempResult);
    const result: InactiveMonths[] = [];
    tempResult?.map((c: InactiveMonths) => result.push(c));
    console.log(result);
    return result;
  };
  
  
  

  
    

  
  
    

  