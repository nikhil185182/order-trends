import { Button } from "@mui/material";
import { fetchCompanyData } from "../CompanyOrderTrend/API";
import { AppDispatch } from "../../shared/utils/redux/store";
import { useEffect, useState } from "react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import { CompanyStringSelector } from "../CompanyOrderTrend/selector";
import { DateStringSelector } from "../CompanyOrderTrend/selector";
const CompanyButtonContainer = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const companyArray: string[] = useAppSelector(CompanyStringSelector);
  const dateArray: string[] = useAppSelector(DateStringSelector);
  const [companyString,setcs] = useState("")
  const [dateString,setds] = useState("")
  dispatch(fetchCompanyData({companyString:companyString,dateString:dateString})) 

  const handleClick = ()=> {
    setcs(companyArray.join(",").toString());
    setds(dateArray.join(",").toString())
  }
    return (
      <Button onClick={handleClick} > 
        submit
      </Button>
    );
    
  }
export default CompanyButtonContainer;
