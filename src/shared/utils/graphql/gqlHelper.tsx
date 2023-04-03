import { useQuery } from "@apollo/client";
import { GQL_ResponseType, OrderTrendDto } from "../../../containers/orderTrend/orderTrendDto";
import { COMPANIES_QUERY, GETSPECIFICCOMPANIESDATA_QUERY, INACTIVEUSERS_QUERY, NEW_USER_QUERY, ORDERTREND_QUERY } from "./queries";
import { DAYS, DummyCompanies } from "../../config";
import { NewUsersDTO } from "../../dto/newUsersDto";
import { useAppSelector } from "../redux/selectors/hooks";
import { newusertype } from "../../dto/newUsersDto";
import { companiesList, company, fres } from "../../dto/companyLevelOrderDTO";
import { getInactiveUsersData, Li2 } from "../../dto/InactiveUsersDTO";

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
export const CompanyUtil = async () => {
    const { data } =useQuery<companiesList>(COMPANIES_QUERY);
    const tempResult: company[] = data?.companyLists!;
    const result: company[] = [];
    tempResult?.map((c: company) => result.push(c));
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
  
    

  