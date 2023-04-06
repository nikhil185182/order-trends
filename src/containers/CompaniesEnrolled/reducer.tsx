import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Slice,
} from "@reduxjs/toolkit";
import { CompaniesEnrolledDTO, CompaniesEnrolledType,   } from "./models";
import { ReduxInitialState } from "./models";
import { NEW_USER_QUERY } from "./queries";
import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import { useQuery } from "@apollo/client";

const fromdate: Date = new Date();
fromdate.setDate(fromdate.getDate() - 75);
const todate: Date = new Date();
const InitialState: ReduxInitialState = {
  __typename: "",
  fromDate: fromdate.toLocaleDateString(),
  toDate: todate.toLocaleDateString(),
  newUsersdata: [],
  isDrawerOpen: false,
  isLineOrBar: true,
  tempcompanieslist: [],
  barclickedDate: '',
  status: ''
};



export const DataFromGraphql = ():CompaniesEnrolledDTO[] => {

  let CompaniesEnrolledquery = NEW_USER_QUERY;
 
  
  const inputfromdate=useAppSelector(state=>state.EnrolledCompanies.fromDate)
 
  const inputtodate=useAppSelector(state=>state.EnrolledCompanies.toDate)
  
  const { loading, error, data } = useQuery<CompaniesEnrolledType>(CompaniesEnrolledquery ,
      {
          variables:{Fromdate:new Date(inputfromdate),Todate:new Date(inputtodate)}
      })
  if (data) {
      return data.NewUsersData;

  } else if (loading) {
      console.log("Data is Loading")
      return []
  }
  else {
      console.log(`Error ${error?.message}`)
      return []
  }
}
export const FetchCompaniesEnrolledData = createAsyncThunk(
  "CompaniesEnroleddata/fetch",
  async () => {
    try {
      
      const response: CompaniesEnrolledDTO[]  = DataFromGraphql();
      return response;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

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
      state.isLineOrBar = action.payload;
    },
    updateCompaniesList: (state, action: PayloadAction<String[]>) => {
      state.tempcompanieslist = action.payload;
    },
    updatebarclickedDate: (state, action: PayloadAction<String>) => {
      state.barclickedDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchCompaniesEnrolledData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        FetchCompaniesEnrolledData.fulfilled,
        (state, action: PayloadAction<CompaniesEnrolledDTO[]>) => {
          state.newUsersdata = action.payload;
          state.status = "fullfiled";
        }
      )
      .addCase(FetchCompaniesEnrolledData.rejected, (state) => {
        state.status = "Rejected";
      });
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
} = CompaniesEnrolledSlice.actions;
