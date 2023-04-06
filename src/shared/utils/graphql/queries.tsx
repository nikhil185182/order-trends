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
  }} `;

  export const COMPANIES_QUERY = gql`
query companyRequest{
  companyLists{
 CompanyName
 }
 }`


export const GETSPECIFICCOMPANIESDATA_QUERY = gql`query abc($i1:String!,$i2:String!){
  getSpecificCompanyData(cname:$i1,cdates:$i2){
    TotalOrders
    AttemptedOrders
    CompletedOrders
    Date
    Company  
  } 
}`

