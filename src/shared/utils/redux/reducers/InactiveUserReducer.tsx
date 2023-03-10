import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

import { Dayjs } from "dayjs";
import { useEffect } from "react";
import { getInactiveUsersData } from "../../../dto/InactiveUsersDTO";

import { DataFromGraphql_inactive,DataFromGraphqlUser } from "../../graphql/gqlHelper";

import { RootState, AppDispatch } from "../store";
type initialstatetypes =
    {
        Days: number;
        inactiveUsers: getInactiveUsersData[];
        inactiveUsers30: getInactiveUsersData[];
        inactiveUsers60: getInactiveUsersData[];
        inactiveUsers90: getInactiveUsersData[];
        inactiveUsers120: getInactiveUsersData[];
    };
const InitialState: initialstatetypes =
{
    Days: 15,
    inactiveUsers: [],
    inactiveUsers30: [],
    inactiveUsers60: [],
    inactiveUsers90: [],
    inactiveUsers120: [],
};


// export const FetchInactiveusersdata=createAsyncThunk(
//     'newusersdata/fetch',
//     async () => {
//       try
//       {const response:getInactiveUsersData[] = DataFromGraphqlUser();
//         console.log(response);
//         return response;
//       }
//       catch(err){
//         console.log(err)
//         return []; 
//       }
// })


const InactiveUserSlice = createSlice({
    name: "InactiveUsers",
    initialState: InitialState,
    reducers: {
        settingDays: (state,{payload}) => { state.Days = payload; },
        addingInactiveUsersdata30(state, action: PayloadAction<getInactiveUsersData[]>) { 
        state.inactiveUsers30 = action.payload; 
        },
        addingInactiveUsersdata60(state, action: PayloadAction<getInactiveUsersData[]>) {  
        state.inactiveUsers60 = action.payload; 
        },
        addingInactiveUsersdata90(state, action: PayloadAction<getInactiveUsersData[]>) {            
        state.inactiveUsers90 = action.payload; 
       },
        addingInactiveUsersdata120(state, action: PayloadAction<getInactiveUsersData[]>) {            
        state.inactiveUsers120 = action.payload; 
       },
       addingInactiveUsersdata(state, action: PayloadAction<getInactiveUsersData[]>) {            
        state.inactiveUsers = action.payload; 
       },

    },
});



export default InactiveUserSlice;

export const { settingDays, addingInactiveUsersdata, addingInactiveUsersdata30, addingInactiveUsersdata60,
addingInactiveUsersdata90,addingInactiveUsersdata120 } = InactiveUserSlice.actions;
