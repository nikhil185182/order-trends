import { ApolloClient, gql } from "@apollo/client";

export const FILMS_QUERY = gql`
  query HelloGetData($input : Int!){
    ordertrend(days : $input){
      OrderDate
      AttemptedOrders
      CompletedOrders
      TotalOrders
    }
  }
`;



export const INACTIVEUSERS_QUERY = gql`
   query InactiveUsersQuery($input : Int!){
	inactiveusers(days : $input){
    CompanyName
    LatestOrderDate
   }	
 }
`;



