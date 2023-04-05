import { useQuery } from "@apollo/client";
import { COMPANIES_QUERY, GETSPECIFICCOMPANIESDATA_QUERY, INACTIVEMONTHS_QUERY, INACTIVEUSERS_QUERY, NEW_USER_QUERY } from "./queries";

import { useAppSelector } from "../redux/selectors/hooks";

import { companiesList, company, fres } from "../../dto/companyLevelOrderDTO";
import { getInactiveUsersData, GQL_list, InactiveMonths, Li2 } from "../../dto/InactiveUsersDTO";
import { useEffect, useState } from "react";





export const CompanyUtil = async () => {
    const { data } =useQuery<companiesList>(COMPANIES_QUERY);
    const tempResult: company[] = data?.companyLists!;
    const result: company[] = [];
    tempResult?.map((c: company) => result.push(c));
    console.log(tempResult);
    return tempResult;
  };
  
  
  export async function GetSpecificCompanyData(
    companyString: String,
    dateString: String
  ) {
    console.log("====================================");
    console.log("I called gql helper");
    console.log("====================================");
    const { data, loading, error } =  useQuery<fres>(
      GETSPECIFICCOMPANIESDATA_QUERY,
      {
        variables: {
          i1: companyString,
          i2: dateString,
        },
      }
    ); 
    return { data, loading, error };
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
  
  
  

  
    

  
  
    

  