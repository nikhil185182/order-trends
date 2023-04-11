import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../shared/utils/redux/selectors/hooks";
import { fetchCompanies } from "./reducer";
import { GetSpecificCompanyData, CompanyUtil } from "./gqlHelper";
import { company, companyLevel, reqbody } from "./models";
export const fetchCompanyData = createAsyncThunk(
    "companyOrderData/fetchSpecificCompaniesData",
    async (params: reqbody) => {

      console.log('====================================');
      console.log(`in thunk`);
      console.log('====================================');
      
      try {  
        console.log('====================================');
        console.log(`calling gql query`);
        console.log('====================================');
        const response = await GetSpecificCompanyData(
          params.companyString,
          params.dateString
        );

        console.log('====================================');
        console.log(`called gql query res`,response);
        console.log('====================================');

        if (!response.loading && response.data) {
          const tempResult: companyLevel[]  = response.data
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
  