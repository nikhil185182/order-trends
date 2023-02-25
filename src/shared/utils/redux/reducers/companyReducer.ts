import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { company, companyLevel, reqbody } from "../../../dto/companyLevelOrderDTO";
import { CompanyUtil, GetSpecificCompanyData } from "../../graphql/gqlHelper";
import { useAppDispatch } from "../hooks";





type dto = {
  Data: companyLevel[];
  status: string;
  companies:company[],
  companyString:String,
  dateString:String
};



const InitialState: dto = {
  Data: [
    {
      Company: "",
  Date:"",
  TotalOrders: 0
    },
  ],
  companies:[],
  companyString:"",
  dateString:"",
  status: ""
};

const companysSlice = createSlice({
  name: "companyOrderData",
  initialState: InitialState,
  reducers: {
    fetchCompanies: (state,{payload})=> {
      state.companies = payload
    },
    fetchCompanyDatas:(state,{payload})=>{
      state.Data=payload
    },
    setCompanyString(state,{payload}:PayloadAction<String>){
      state.companyString=payload
    },
    setDateString(state,{payload}:PayloadAction<String>){
      state.dateString=payload
    }
    
  },
  extraReducers:(builder) =>{
    builder
      .addCase(fetchCompanyData.pending, (state, ) => {
        state.status = "loading";
      })
      .addCase(fetchCompanyData.fulfilled, (state, { payload }: PayloadAction<companyLevel[]>) => {
        state.status = "success"
        console.log(payload)
        state.Data=payload
      })
      .addCase(fetchCompanyData.rejected, (state ) => {
        state.status = "failed";
      });
  },
});



export const fetchCompanyData = createAsyncThunk(
    'companyOrderData/fetchSpecificCompaniesData', 
    async (params: reqbody) => {
        try {
           console.log('====================================');
           console.log("called thunk");
           console.log('====================================');

            const response =await GetSpecificCompanyData(params.companyString, params.dateString)
            if( !( response).loading && response.data){
            const tempResult: companyLevel[] | undefined = response.data?.getSpecificCompanyData
            const result: companyLevel[] = [];
            tempResult?.map((c: companyLevel) => result.push(c));
            return result;
            }

        } catch (error: any) {
            return error
        }
     }

);




export const Cutil = async (params: reqbody) => {
  
  const dispatch= useAppDispatch()

  try {
     console.log('====================================');
     console.log("called thunk");
     console.log('====================================');

      const response = await GetSpecificCompanyData(params.companyString, params.dateString)

      if( !response.loading && response.data){
       console.log("//entered validation")
       console.log('====================================');
       console.log(response);
       console.log('====================================');
      const tempResult: companyLevel[] | undefined = response.data?.getSpecificCompanyData;
      const result: companyLevel[] = [];
      tempResult?.map((c: companyLevel) => result.push(c));
      console.log('====================================');
      console.log("result is ",result);
      console.log('====================================');
      dispatch(fetchCompanies(result));
    }

  } catch (error: any) {
      return error
  }
}


export const Helperutil =async()=>{
  const dispatch= useAppDispatch()
    try {
        const response :company[]= await CompanyUtil();
            dispatch(fetchCompanies(response))    
    } catch (error : any) {
        return error.Message
    }
}




export default companysSlice.reducer;

export const { fetchCompanies } = companysSlice.actions



