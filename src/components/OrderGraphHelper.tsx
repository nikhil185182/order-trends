import { useQuery } from '@apollo/client';
import React from 'react';
import { DAYS } from '../shared/config';
import { Li, OrderTrendDto } from '../shared/dto/orderTrendDto';
import { COMPANIES_QUERY, GETSPECIFICCOMPANIESDATA_QUERY, ORDERTRENDS_QUERY } from "../shared/utils/graphql/queries";

export default function OrderGraphHelper() {
    const { data } = useQuery<Li>(ORDERTRENDS_QUERY, {
        variables: { input: DAYS },
      });
      const li: OrderTrendDto[] | undefined = data?.ordertrend
      var original: OrderTrendDto[] = [];
      li?.map((e: OrderTrendDto) => {
        original.push(e);
      })
      console.log(li);
  return (
    <div>
      
    </div>
  )
}
