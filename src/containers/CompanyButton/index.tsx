import { AppDispatch } from "../../shared/utils/redux/store";
import { useEffect, useState } from "react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../shared/utils/redux/hooks";
import { CompanyStringSelector } from "../CompanyOrderTrend/selector";
import { DateStringSelector } from "../CompanyOrderTrend/selector";
import { fres } from "../CompanyOrderTrend/models";
import { useQuery } from "@apollo/client";
import { GETSPECIFICCOMPANIESDATA_QUERY } from "../CompanyOrderTrend/queries";
import { fetchCompanyDatas } from "../CompanyOrderTrend/reducer";

import { ContainedButton } from "../../components/ConatinedButton";
const CompanyButtonContainer = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const companyArray: string[] = useAppSelector(CompanyStringSelector);
  const dateArray: string[] = useAppSelector(DateStringSelector);
  const [companyString,setcs] = useState("")
  const [dateString,setds] = useState("")
  const { data, loading, error } =  useQuery<fres>(
    GETSPECIFICCOMPANIESDATA_QUERY,
    {
      variables: {
        i1: companyString,
        i2: dateString,
      },
    }
  ); 
useEffect(()=>{
  dispatch(fetchCompanyDatas(data?.getSpecificCompanyData!)) 
},[data!])

  const handleClick = ()=> {
    setcs(companyArray.join(",").toString());
    setds(dateArray.join(",").toString())
  }
    return (
      <ContainedButton onClick={handleClick} > 
        submit
      </ContainedButton>
    );
    
  }
export default CompanyButtonContainer;
