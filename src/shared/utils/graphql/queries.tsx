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

export const INACTIVEUSERS_QUERY = gql`
query InactiveUsers($input: DateTime!) {
  inactiveusers(date: $input) {
    CompanyName
    LatestOrderDate
  }
}
`;

export const INACTIVEMONTHS_QUERY = gql`
query Inactivenew($input:Int!){
  inactivemonths(days:$input) {
    CompanyName
    LastOrderDate
    Months
  }
}
`;