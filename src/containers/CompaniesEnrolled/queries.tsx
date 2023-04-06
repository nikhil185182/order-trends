import { gql } from "@apollo/client";

export const NEW_USER_QUERY = gql`query GetNewUsers($Fromdate:DateTime!,$Todate:DateTime!){
    NewUsersData(from:$Fromdate,to:$Todate){
      companyCreatedTimeStamp
      namesOfCompanies
      frequency
    }} `;