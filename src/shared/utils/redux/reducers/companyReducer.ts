import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  company,
  companyLevel,
} from "../../../dto/companyLevelOrderDTO";
import { fetchCompanyData } from "../companyAPI";

type dto = {
  Data: companyLevel[];
  companyString: string[];
  dateString: string[];
  status: string;
  companies: company[];

};

const InitialState: dto = {
  Data: [
    {
      Company: "",
      Date: "",
      TotalOrders: 0,
    },
  ],
  companyString: [],
  dateString: [],
  companies: [],
  status: ""
};

const companysSlice = createSlice({
  name: "companyOrderData",
  initialState: InitialState,
  reducers: {
    fetchCompanies: (state, { payload }) => {
      state.companies = payload;
    },
    fetchCompanyDatas: (state, { payload }: PayloadAction<companyLevel[]>) => {
      state.Data = payload;
    },
    setCompanyString(state, { payload }: PayloadAction<string[]>) {
      console.log("====================================");
      console.log(`companystring dispatched`);
      console.log("====================================");
      state.companyString = payload;
    },
    setDateString(state, { payload }: PayloadAction<string[]>) {
      state.dateString = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCompanyData.fulfilled,
        (state, { payload }: PayloadAction<companyLevel[]>) => {
          state.status = "success";
          console.log(payload);
          state.Data = payload;
        }
      )
      .addCase(fetchCompanyData.rejected, (state) => {
        state.status = "failed";
      });
  },
});


export default companysSlice.reducer;

export const {
  fetchCompanies,
  fetchCompanyDatas,
  setCompanyString,
  setDateString,
} = companysSlice.actions;
