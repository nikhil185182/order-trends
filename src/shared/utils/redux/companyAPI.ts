
import { createAsyncThunk } from "@reduxjs/toolkit";
import { reqbody, companyLevel, company } from "../../dto/companyLevelOrderDTO";

// import { GetSpecificCompanyData, CompanyUtil } from "../graphql/gqlHelper";

import { useAppDispatch } from "./selectors/hooks";
import { fetchCompanies } from "./reducers/companyReducer";
import { CompanyUtil, GetSpecificCompanyData } from "../graphql/gqlHelper";

export const fetchCompanyData = createAsyncThunk(
    "companyOrderData/fetchSpecificCompaniesData",
    async (params: reqbody) => {
      try {
        console.log("====================================");
        console.log("called thunk");
        console.log("====================================");
  
        const response = await GetSpecificCompanyData(
          params.companyString,
          params.dateString
        );
        if (!response.loading && response.data) {
          const tempResult: companyLevel[]  = response.data?.getSpecificCompanyData;
          const result: companyLevel[] = [];
          tempResult?.map((c: companyLevel) => result.push(c));
  
  
          console.log('====================resukt is ================');
          console.log(result);
          console.log('====================================');
          return result;
        }
      } catch (error: any) {
        return error;
      }
    }
  );
  
  export const Cutil = async (params: reqbody) => {
    const dispatch = useAppDispatch();
  
  
    try {
      console.log("====================================");
      console.log("called thunk");
      console.log("====================================");
  
      const response = await GetSpecificCompanyData(
        params.companyString,
        params.dateString
      );
  
      if (!response.loading && response.data) {
        console.log("entered validation");
        console.log("====================================");
        console.log(response);
        console.log("====================================");
        const tempResult: companyLevel[] | undefined = response.data?.getSpecificCompanyData;
        const result: companyLevel[] = [];
        tempResult?.map((c: companyLevel) => result.push(c));
        console.log("====================================");
        console.log("result is ", result);
        console.log("====================================");
        dispatch(fetchCompanies(result));
      }
    } catch (error: any) {
      return error;
    }
  };
  
  export const Helperutil = async () => {
    const dispatch = useAppDispatch();
    try {
      const response: company[] = await CompanyUtil();
      dispatch(fetchCompanies(response));
    } catch (error: any) {
      return error.Message;
    }
  };
  