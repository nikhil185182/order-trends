import { gql } from "@apollo/client";

export const CompaniesEnrolledQuery = gql`query GetNewUsers($FromDate:DateTime!,$ToDate:DateTime!){
  NewUsersData(from:$FromDate,to:$ToDate){
      companyCreatedTimeStamp
      namesOfCompanies
      frequency
    }} `;