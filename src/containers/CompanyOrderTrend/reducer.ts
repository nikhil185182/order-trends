import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { companyLevel, ReduxObjectDTO } from "./models";
import { fetchCompanyData } from "./API";


const InitialState: ReduxObjectDTO = {
  companyString: [],
  dateString: [],
  Data: [
    {
      Company: "",
      Date: "",
      TotalOrders: 0,
      AttemptedOrders: 0,
      CompletedOrders: 0,
    },
  ],
  companies: [],
  status: "",
  label: "TotalOrders",
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
      state.companyString = payload;
    },
    setDateString(state, { payload }: PayloadAction<string[]>) {
      state.dateString = payload;
    },
    setLabel(state, { payload }: PayloadAction<string>) {
      state.label = payload;
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
          console.log(payload);
          state.status = "success";
          state.Data = payload;
        }
      )
      .addCase(fetchCompanyData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default companysSlice

export const {
  fetchCompanies,
  fetchCompanyDatas,
  setCompanyString,
  setDateString,
  setLabel,
} = companysSlice.actions;
