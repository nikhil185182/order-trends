import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../shared/utils/redux/hooks";
import {
  CompanyStringSelector,
  DateStringSelector,
} from "../shared/utils/redux/selectors/companySelector";
import { fetchCompanyData } from "../shared/utils/redux/companyAPI";
import { AppDispatch } from "../shared/utils/redux/store";
import { useState } from "react";

const CompanyButtonContainer = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const companyArray: string[] = useAppSelector(CompanyStringSelector);
  const dateArray: string[] = useAppSelector(DateStringSelector);
  const [cs,setcs] = useState("")
  const [ds,setds] = useState("")
  dispatch(fetchCompanyData({companyString:cs,dateString:ds}))
  const handleClick = ()=> {
   setcs(companyArray.join(","))
   setds(dateArray.join(",")) 
    }
    return (
      <Button onClick={handleClick} style={{
        color :"white",
        backgroundColor:"#54B948",
        width:"100%"
      }} >
        submit
      </Button>
    );
    
  }
  




export default CompanyButtonContainer;
