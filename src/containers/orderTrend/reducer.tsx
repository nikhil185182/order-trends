import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GQL_ResponseType, Orders,OrderTrendState,ReduxOrderDateListType } from './models';
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
    const {data} = useQuery<GQL_ResponseType>(ORDERTREND_QUERY, {variables: { input: DAYS }});
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
        addOrderDateList : (state,action: PayloadAction<ReduxOrderDateListType>) => {
            state.orderDateList = action.payload.orderDateList;
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