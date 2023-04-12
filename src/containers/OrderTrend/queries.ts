import { gql } from "@apollo/client";

export const ORDERTREND_QUERY = gql`
  query GetOrderTrendData($input : Int!){
    getLastDays(days : $input){
      OrderDate
      AttemptedOrders
      CompletedOrders
      TotalOrders
    }
  }
`;