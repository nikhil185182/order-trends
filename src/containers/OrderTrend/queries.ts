import { gql } from "@apollo/client";

export const ORDERTREND_QUERY = gql`
  query GetOrderTrendData($input : Int!){
    ordertrend(days : $input){
      OrderDate
      AttemptedOrders
      CompletedOrders
      TotalOrders
    }
  }
`;