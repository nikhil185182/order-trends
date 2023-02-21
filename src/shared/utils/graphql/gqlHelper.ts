
import { useQuery } from "@apollo/client";
import { DAYS } from "../../config";
import { companiesList, company, companyLevel, fres } from "../../dto/companyLevelOrderDTO";
import { Li, OrderTrendDto } from "../../dto/orderTrendDto";
import { COMPANIES_QUERY, GETSPECIFICCOMPANIESDATA_QUERY, ORDERTRENDS_QUERY } from "./queries";


export function CompanyUtil(){
    const { data } = useQuery<companiesList>(COMPANIES_QUERY);
    const tempResult : company[]  = data?.companyLists!;
    const result :company[] = [];
    tempResult?.map((c:company)=>result.push(c));
    return tempResult;
  }
  
  
export  function OrderUtil(){
    const { data } = useQuery<Li>(ORDERTRENDS_QUERY, {
      variables: { input: DAYS },
    });
    const li: OrderTrendDto[] | undefined = data?.ordertrend
    var original: OrderTrendDto[] = [];
    li?.map((e: OrderTrendDto) => 
      original.push(e)
    )
    return original;
  }

  export function GetSpecificCompanyData(companyString:String,dateString:String){
    const { data } = useQuery<fres>(GETSPECIFICCOMPANIESDATA_QUERY,{
        variables:{
            input:{companyString,dateString}
        }
    })
    console.log(data);
    const tempResult : companyLevel[] | undefined = data?.companyres
    const result : companyLevel[] = []
    tempResult?.map((c:companyLevel)=>result.push(c));
    return result;
  }

  

  