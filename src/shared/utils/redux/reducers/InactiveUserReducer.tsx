import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";
import { Dayjs } from "dayjs";
import { useEffect } from "react";
import { getInactiveUsersData, inacparam, InactiveMonths } from "../../../dto/InactiveUsersDTO";
import { DataFromGraphqlUser, InactiveUtil } from "../../graphql/gqlHelper";
import { useDispatch,useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { useAppDispatch } from "../selectors/hooks";
type initialstatetypes =
    {
        GQL_list: InactiveMonths[];
        Date: String;
        inactiveUsers: getInactiveUsersData[];
    };
const today: Date = new Date();
today.setDate(today.getDate() - 60);
const dateString: string = today.toISOString().slice(0, 10);

const InitialState: initialstatetypes =
{
    Date: dateString,
    inactiveUsers: [],
    GQL_list: []
};

export const fetchInactiveMonths = createAsyncThunk("InactiveUsers/fetchInactiveData",async (thunkAPI)=>{
    return  InactiveUtil();
});




const InactiveUserSlice = createSlice({
    name: "InactiveUsers",
    initialState: InitialState,
    reducers: {
        settingDate: (state,{payload}) => { state.Date = payload; },
       addingInactiveUsersdata(state, action: PayloadAction<getInactiveUsersData[]>) {            
        state.inactiveUsers = action.payload; 
       },
       fetchInactiveData(state, action:PayloadAction<InactiveMonths[]>) {
        state.GQL_list = action.payload;
      },

    },
});



export default InactiveUserSlice;

export const { settingDate, addingInactiveUsersdata,fetchInactiveData} = InactiveUserSlice.actions;

