import { gql } from "@apollo/client";

export const ORDERTREND_QUERY = gql`
  query HelloGetData($input : Int!){
    ordertrend(days : $input){
      OrderDate
      AttemptedOrders
      CompletedOrders
      TotalOrders
    }
  }
`;


export const NEW_USER_QUERY = gql`query GetNewUsers($Fromdate:DateTime!,$Todate:DateTime!){
  NewUsersData(from:$Fromdate,to:$Todate){
    companyCreatedTimeStamp
    namesOfCompanies
    frequency
  }} `