
import { createAsyncThunk } from "@reduxjs/toolkit";
import { reqbody, companyLevel, company } from "../../dto/companyLevelOrderDTO";
import { useAppDispatch } from "./selectors/hooks";
import { fetchCompanies } from "./reducers/companyReducer";
import { CompanyUtil, GetSpecificCompanyData } from "../graphql/gqlHelper";

export const fetchCompanyData = createAsyncThunk(
    "companyOrderData/fetchSpecificCompaniesData",
    async (params: reqbody) => {
      try {  
        const response = await GetSpecificCompanyData(
          params.companyString,
          params.dateString
        );
        if (!response.loading && response.data) {
          const tempResult: companyLevel[]  = response.data?.getSpecificCompanyData;
          const result: companyLevel[] = [];
          tempResult?.map((c: companyLevel) => result.push(c));
          return result;
        }
      } catch (error: any) {
        return error;
      }
    }
  );

  
  export const Helperutil = async () => {
    const dispatch = useAppDispatch();
    try {
      const response: company[] = await CompanyUtil();
      dispatch(fetchCompanies(response));
    } catch (error: any) {
      return error.Message;
    }
  };
  