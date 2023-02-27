import { useQuery } from "@apollo/client";
import { DAYS } from "../../config";
import {
  companiesList,
  company,
  fres,
} from "../../dto/companyLevelOrderDTO";
import { Li, OrderTrendDto } from "../../dto/orderTrendDto";
import {
  COMPANIES_QUERY,
  GETSPECIFICCOMPANIESDATA_QUERY,
  ORDERTRENDS_QUERY,
} from "./queries";

export const CompanyUtil = async () => {
  const { data } =useQuery<companiesList>(COMPANIES_QUERY);
  const tempResult: company[] = data?.companyLists!;
  const result: company[] = [];
  tempResult?.map((c: company) => result.push(c));
  return tempResult;
};

export function OrderUtil() {
  const { data } = useQuery<Li>(ORDERTRENDS_QUERY, {
    variables: { input: DAYS },
  });
  const li: OrderTrendDto[] | undefined = data?.ordertrend;
  var original: OrderTrendDto[] = [];
  li?.map((e: OrderTrendDto) => original.push(e));
  return original;
}

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
