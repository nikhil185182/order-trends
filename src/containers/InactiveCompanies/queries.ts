import { gql } from "@apollo/client";

export const INACTIVEUSERS_QUERY = gql`
query InactiveUsers($input: DateTime!) {
  getInactiveCompanies(date: $input) {
    CompanyName
    LatestOrderDate
  }
}
`;

export const INACTIVEMONTHS_QUERY = gql`
query Inactivenew($input:Int!){
  getInactiveMonths(days:$input) {
    CompanyName
    LastOrderDate
    Month
    Year
  }
}
`;