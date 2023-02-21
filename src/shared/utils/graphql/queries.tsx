import { gql } from "@apollo/client/core";

export const ORDERTRENDS_QUERY = gql`
  query HelloGetData($input : Int!){
    ordertrend(days : $input){
      OrderDate
      AttemptedOrders
      CompletedOrders
      TotalOrders
    }
  }
`;


export const COMPANIES_QUERY = gql`
query companyRequest{
  companyLists{
 CompanyName
 }
 }`


export const GETSPECIFICCOMPANIESDATA_QUERY = gql`
query ABC($i1:String!,$i2:String!){
    getSpecificCompanyData(companyString:$i1,dateString:$i2){
      Company
      TotalOrders
    }
}`