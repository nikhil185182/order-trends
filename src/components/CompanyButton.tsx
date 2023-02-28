import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../shared/utils/redux/hooks";
import {
  CompanyStringSelector,
  DateStringSelector,
} from "../shared/utils/redux/selectors/companySelector";
import { fetchCompanyData } from "../shared/utils/redux/companyAPI";
import { AppDispatch } from "../shared/utils/redux/store";
import { GetSpecificCompanyData } from "../shared/utils/graphql/gqlHelper";
import { fetchCompanyDatas } from "../shared/utils/redux/reducers/companyReducer";
import { companyLevel, fres, reqbody } from "../shared/dto/companyLevelOrderDTO";
import { useCallback, useEffect, useState } from "react";

const CompanyButtonContainer = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const companyArray: string[] = useAppSelector(CompanyStringSelector);
  const dateArray: string[] = useAppSelector(DateStringSelector);
  const [data,setData] = useState<companyLevel[]>()



  const handleClick = useCallback(async ()=> {
    const cs: string = companyArray.join(",")
    const ds:string = dateArray.join(",")
    const{data,loading}=await GetSpecificCompanyData(cs,ds)
    if(data&&!loading){
      setData(data.getSpecificCompanyData)
      dispatch(fetchCompanyDatas(data?.getSpecificCompanyData))
    }
    
  },[])
  
  return (
    <Button onClick={handleClick} >
      submit
    </Button>
  );
};

export default CompanyButtonContainer;
