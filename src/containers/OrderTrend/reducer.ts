import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Orders,OrdersListType,OrderTrendGQLResponse,OrderTrendState } from './models';
import { ORDERTREND_DUMMY_DATA } from '../../shared/global_constants';
import { useQuery } from "@apollo/client";
import { ORDERTREND_QUERY } from './queries';
import { DAYS } from '../../shared/config';
import { OrderTrendUtil } from './utils';

const initialState : OrderTrendState = {
    Data : [ORDERTREND_DUMMY_DATA],
    orderDateList : [],
    status : ""
}

//ASYNC ACTION
export const fetchOrderTrenData = createAsyncThunk("ordertrend/fetch",async (thunkAPI)=>{
    const {data} = useQuery<OrderTrendGQLResponse>(ORDERTREND_QUERY, {variables: { input: DAYS }});
    const result = OrderTrendUtil(data!);
    return result;
});


const orderTrendSlice  = createSlice({
    name:"orderTrendData",
    initialState: initialState,
    reducers : {
        setOrderTrendData : (state,action: PayloadAction<OrderTrendState>) => {
            state.Data = action.payload.Data;
        },
        addOrderDateList : (state,action: PayloadAction<OrdersListType>) => {
            state.orderDateList = action.payload.data;
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchOrderTrenData.pending,(state)=>{
            state.status="Pending";
        }).addCase(fetchOrderTrenData.fulfilled,(state,action : PayloadAction<Orders[]>)=>{
            state.Data = action.payload;
            state.status="Fulfilled";
        }).addCase(fetchOrderTrenData.rejected,(state)=>{
            state.status="Rejected";
        })
    }
})

export const {setOrderTrendData,addOrderDateList} = orderTrendSlice.actions;

export default orderTrendSlice.reducer;