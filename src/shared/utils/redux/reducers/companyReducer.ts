
import {  createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { RootState, AppDispatch } from "../store";

let dispatch:AppDispatch;


type res = {
  name: string;
  date: string,
  frequency: number;
};

type dto = {
  Data: res[];
  status: string;
};

type arg={
    companystring:string;
    datestring :string
}


const InitialState: dto = {
  Data: [
    {
      name: "",
      date: "",
      frequency: 0,
    },
  ],
  status: "",
};

const companysSlice = createSlice({
  name: "companyOrderData",
  initialState: InitialState,
  reducers: {
    fetchCopmanyDataSuccess: (state, { payload }: PayloadAction<res[]>)=> {
      state.status = "success";
       state.Data = payload;
    },
    fetchCompanyDataFailure:(state)=>{
      state.status = "failure";
       state.Data = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCompanyData.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(fetchCompanyData.fulfilled, (state, { payload }: any) => {
        state.status = "succeeded"
        state.Data = payload
      })
      .addCase(fetchCompanyData.rejected, (state, { payload }: any) => {
        state.status = "failed";
      });
  },
});



export const fetchCompanyData = createAsyncThunk<
    {data:res[]}, 
    arg, 
    {state: dto; rejectValue: AxiosResponse<{Message:string}>}
>(
    'companyOrderData/fetchSpecificCompaniesData', 
     async (params: arg) => {
        try {
            const { data}  = await axios.post('http://localhost/4000/companyLevelOrder/',{
                companystring: params.companystring,
                datestring: params.datestring,
            })
            return data;
        } catch (error: any) {
            return error.Message
        }
     }
);






export const helperutil=async (params:arg)=>{
    try {
        const { data}  = await axios.post('http://localhost/4000/companyLevelOrder',{
                companystring: params.companystring,
                datestring: params.datestring,
            })
            dispatch(fetchCopmanyDataSuccess(data))
            return data;
        
    } catch (error : any) {
        dispatch(fetchCompanyDataFailure)
        return error.Message
    }
}






export default companysSlice.reducer;

export const { fetchCopmanyDataSuccess,fetchCompanyDataFailure} = companysSlice.actions



