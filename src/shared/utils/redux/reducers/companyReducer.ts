import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { company, companyLevel, reqbody } from "../../../dto/companyLevelOrderDTO";
import { CompanyUtil, GetSpecificCompanyData } from "../../graphql/gqlHelper";



export type res = {
  name: string;
  date: string,
  frequency: number;
};

type dto = {
  Data: res[];
  status: string;
  companies:company[]
};



const InitialState: dto = {
  Data: [
    {
      name: "",
      date: "",
      frequency: 0,
    },
  ],
  companies:[],
  status: "",
};

const companysSlice = createSlice({
  name: "companyOrderData",
  initialState: InitialState,
  reducers: {
    fetchCompanies: (state)=> {
      state.companies = CompanyUtil()
    }
  },
  extraReducers:(builder) =>{
    builder
      .addCase(fetchCompanyData.pending, (state, ) => {
        state.status = "loading";
      })
      .addCase(fetchCompanyData.fulfilled, (state, { payload }: any) => {
        state.status = "success"
        state.Data.push(payload)
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
            const  data :companyLevel[]= GetSpecificCompanyData(params.companyString,params.dateString);
            return data;
        } catch (error: any) {
            return error.Message
        }
     }
);






// export const helperutil=async (params:arg)=>{
//     try {
//         const { data}  = await axios.post('http://localhost/4000/companyLevelOrder',{
//                 companystring: params.companystring,
//                 datestring: params.datestring,
//             })
//             dispatch(fetchCompanyDataSuccess(data))
//             return data;
        
//     } catch (error : any) {
//         dispatch(fetchCompanyDataFailure)
//         return error.Message
//     }
// }



export default companysSlice.reducer;

export const { fetchCompanies } = companysSlice.actions



