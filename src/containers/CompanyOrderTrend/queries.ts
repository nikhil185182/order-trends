import { gql } from "@apollo/client"

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