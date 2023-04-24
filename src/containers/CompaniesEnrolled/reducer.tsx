import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { CompaniesEnrolledDTO } from "./models";
import { ReduxInitialState } from "./models";

const fromdate: Date = new Date();
fromdate.setDate(fromdate.getDate() - 75);
const todate: Date = new Date();
const InitialState: ReduxInitialState = {
  __typename: "",
  fromDate: fromdate.toLocaleDateString(),
  toDate: todate.toLocaleDateString(),
  newUsersdata: [],
  isDrawerOpen: false,
  isLineChart: true,
  tempCompaniesList: [],
  chartClickedDate: "",
  status: "",
};

const CompaniesEnrolledSlice: Slice<ReduxInitialState> = createSlice({
  name: "CompaniesEnrolled",
  initialState: InitialState,
  reducers: {
    settingfromdate: (state, action: PayloadAction<string>) => {
      state.fromDate = action.payload;
    },
    settingtodate: (state, action: PayloadAction<string>) => {
      state.toDate = action.payload;
    },
    toggleDrawer: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
    toggleLineOrBar: (state, action: PayloadAction<boolean>) => {
      state.isLineChart = action.payload;
    },
    updateCompaniesList: (state, action: PayloadAction<String[]>) => {
      state.tempCompaniesList = action.payload;
    },
    updatebarclickedDate: (state, action: PayloadAction<String>) => {
      state.chartClickedDate = action.payload;
    },
    fetchCompaniesEnrolledData: (
      state,
      action: PayloadAction<CompaniesEnrolledDTO[]>
    ) => {
      state.newUsersdata = action.payload;
    },
  },
});
export default CompaniesEnrolledSlice.reducer;
export const {
  settingfromdate,
  settingtodate,
  toggleDrawer,
  toggleLineOrBar,
  updateCompaniesList,
  updatebarclickedDate,
  fetchCompaniesEnrolledData,
} = CompaniesEnrolledSlice.actions;
