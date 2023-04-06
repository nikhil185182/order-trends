import { gql } from "@apollo/client";

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