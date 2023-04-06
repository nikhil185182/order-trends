import { createAsyncThunk, createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

import dayjs, { Dayjs } from "dayjs";
import { format } from "path";
import { NewUsersDTO } from "../../../../containers/newCustomers/models";
import { RootState, AppDispatch } from "../store";
import { DataFromGraphql } from "../../../../containers/newCustomers/gqlHelper";

type initialstatetypes = {
  __typename : string,
  fromDate: string;
  toDate: string;
  newUsersdata: NewUsersDTO[];
  isDrawerOpen:boolean;
  isLineOrBar:boolean;
  tempcompanieslist:String[];
  barclickedDate:String
};
const fromdate:Date=new Date()
fromdate.setDate((fromdate.getDate()-75))
const todate:Date=new Date()

const InitialState: initialstatetypes = {
  __typename : "",
  fromDate:fromdate.toLocaleDateString(),
  toDate: todate.toLocaleDateString(),
  newUsersdata: [],
  isDrawerOpen:false,
  isLineOrBar:true,
  tempcompanieslist:[],
  barclickedDate:''
  
};
 export const Fetchnewusersdata=createAsyncThunk(
  'newusersdata/fetch',
  async () => {
    try
    {const response:NewUsersDTO[] = DataFromGraphql();
      return response;
    }
    catch(err){
      console.log(err)
      return []; 
    }
     })

const newUserSlice:Slice<initialstatetypes> = createSlice({
  name: "NewUsers",
  initialState: InitialState,
  reducers: {
    settingfromdate: (state, action:PayloadAction<string>) => {
    
      state.fromDate = action.payload;
      
    },
    settingtodate: (state, action:PayloadAction<string>) => {
      state.toDate = action.payload;
    },
    toggleDrawer:(state,action:PayloadAction<boolean>)=>{
      state.isDrawerOpen=action.payload
    },
    toggleLineOrBar:(state,action:PayloadAction<boolean>)=>{
      state.isLineOrBar=action.payload
    },
    updateCompaniesList:(state,action:PayloadAction<String[]>)=>{
      state.tempcompanieslist=action.payload
    },
    updatebarclickedDate:(state,action:PayloadAction<String>)=>{
      state.barclickedDate=action.payload
    }
    
  },
  extraReducers:(builder)=>{
    builder.addCase(Fetchnewusersdata.fulfilled,(state,action:PayloadAction<NewUsersDTO[]>)=>{
      
      state.newUsersdata=action.payload
    })
  }
  }
);
export default newUserSlice.reducer;
export const { settingfromdate, settingtodate,toggleDrawer,toggleLineOrBar,updateCompaniesList,updatebarclickedDate} =
  newUserSlice.actions;