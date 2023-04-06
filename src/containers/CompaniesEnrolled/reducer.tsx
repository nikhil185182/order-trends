import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Slice,
} from "@reduxjs/toolkit";
import { NewUsersDTO, newusertype } from "./models";
import { initialstatetypes } from "./models";
import { NEW_USER_QUERY } from "./queries";
import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import { useQuery } from "@apollo/client";

const fromdate: Date = new Date();
fromdate.setDate(fromdate.getDate() - 75);
const todate: Date = new Date();

const InitialState: initialstatetypes = {
  __typename: "",
  fromDate: fromdate.toLocaleDateString(),
  toDate: todate.toLocaleDateString(),
  newUsersdata: [],
  isDrawerOpen: false,
  isLineOrBar: true,
  tempcompanieslist: [],
  barclickedDate: "",
  status: "",
};

export const DataFromGraphql = ():NewUsersDTO[] => {

  let Newuserquery = NEW_USER_QUERY;
 
  
  const inputfromdate=useAppSelector(state=>state.NewUser.fromDate)
 
  const inputtodate=useAppSelector(state=>state.NewUser.toDate)
  
  const { loading, error, data } = useQuery<newusertype>(Newuserquery,
      {
          variables:{Fromdate:new Date(inputfromdate),Todate:new Date(inputtodate)}
      })
  if (data) {
      return data.NewUsersData

  } else if (loading) {
      console.log("Data is Loading")
      return []
  }
  else {
      console.log(`Error ${error?.message}`)
      return []
  }
}
export const Fetchnewusersdata = createAsyncThunk(
  "newusersdata/fetch",
  async () => {
    try {
      
      const response: NewUsersDTO[]  = DataFromGraphql();
      return response;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const newUserSlice: Slice<initialstatetypes> = createSlice({
  name: "NewUsers",
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
      .addCase(Fetchnewusersdata.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        Fetchnewusersdata.fulfilled,
        (state, action: PayloadAction<NewUsersDTO[]>) => {
          state.newUsersdata = action.payload;
          state.status = "fullfiled";
        }
      )
      .addCase(Fetchnewusersdata.rejected, (state) => {
        state.status = "Rejected";
      });
  },
});
export default newUserSlice.reducer;
export const {
  settingfromdate,
  settingtodate,
  toggleDrawer,
  toggleLineOrBar,
  updateCompaniesList,
  updatebarclickedDate,
} = newUserSlice.actions;
