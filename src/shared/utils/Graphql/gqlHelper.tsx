import { useQuery } from "@apollo/client";
import { Li, OrderTrendDto, getInactiveUsersData, Li2 } from "../../dto/orderTrendDto";
import { DAYS } from "../../config";
import { FILMS_QUERY, INACTIVEUSERS_QUERY } from './queries'
import { useAppSelector } from "../redux/Selectors/hooks";

export function Ordertrendsutil() {
  const { loading, error, data } = useQuery<Li>(FILMS_QUERY, {
    variables: { input: DAYS },
  });

  const li: OrderTrendDto[] | undefined = data?.ordertrend;

  var original: OrderTrendDto[] = [];

  li?.map((e: OrderTrendDto) => {
    original.push(e);
  })
  return original;
}

export  const DataFromGraphql = (Days:Number): getInactiveUsersData[] => {
  const { loading, error, data } = useQuery<Li2>(INACTIVEUSERS_QUERY, {
    variables: { input: Days }
  })

  const li2: getInactiveUsersData[] | undefined = data?.inactiveusers;

  var original: getInactiveUsersData[] = [];

  li2?.map((e: getInactiveUsersData) => {
    original.push(e);
  })
  return original;
}

export  const DataFromGraphqlUser = (): getInactiveUsersData[] => {
  const inputDays = useAppSelector(state=>state.InactiveUsers.Days);
  const { loading, error, data } = useQuery<Li2>(INACTIVEUSERS_QUERY, {
    variables: { input : inputDays }
  })

  console.log(data);
  if (data) {
  const li2: getInactiveUsersData[] | undefined = data?.inactiveusers;

  var original: getInactiveUsersData[] = [];

  li2?.map((e: getInactiveUsersData) => {
    original.push(e);
  })
  console.log(original);
  return original;

} else if (loading) {
    console.log("Data is Loading")
    return []
}
else {
    console.log(`Error ${error?.message}`)
    return []
}
}

