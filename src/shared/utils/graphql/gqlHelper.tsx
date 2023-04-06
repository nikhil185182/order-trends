import { useQuery } from "@apollo/client";


import { useAppSelector } from "../redux/selectors/hooks";

import { companiesList, company, fres } from "../../dto/companyLevelOrderDTO";
import { getInactiveUsersData, GQL_list, InactiveMonths, Li2 } from "../../../containers/InactiveCustomers/models";
import { useEffect, useState } from "react";
import { INACTIVEUSERS_QUERY, INACTIVEMONTHS_QUERY } from "../../../containers/InactiveCustomers/queries";
import { COMPANIES_QUERY, GETSPECIFICCOMPANIESDATA_QUERY } from "./queries";





export const CompanyUtil = async () => {
  const { data } = useQuery<companiesList>(COMPANIES_QUERY);
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
  const { data, loading, error } = useQuery<fres>(
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












