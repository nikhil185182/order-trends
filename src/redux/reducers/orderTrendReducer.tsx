import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderTrendDto, ReduxObjType, ReduxOrderDateListType } from '../../shared/dto/orderTrendDto';
import { ORDERTREND_DUMMY_DATA } from '../../shared/global_constants';
import { OrderTrendUtil } from '../../shared/utils/graphql/gqlHelper';

const initialState : ReduxObjType = {
    Data : [ORDERTREND_DUMMY_DATA],
    orderDateList : [],
    status : ""
}

//ASYNC ACTION
export const fetchOrderTrenData = createAsyncThunk("ordertrend/fetch",async (thunkAPI)=>{
    return  OrderTrendUtil();
});

const orderTrendSlice  = createSlice({
    name:"orderTrendData",
    initialState: initialState,
    reducers : {
        setOrderTrendData : (state,action: PayloadAction<ReduxObjType>) => {
            state.Data = action.payload.Data;
        },
        addOrderDateList : (state,action: PayloadAction<ReduxOrderDateListType>) => {
            state.orderDateList = action.payload.orderDateList;
        },
        deleteOrderDateList : (state,action: PayloadAction<ReduxObjType>) => {
            state.orderDateList = action.payload.orderDateList;
        },
    },
    extraReducers : (builder)=>{
        // builder.addCase(fetchOrderTrenData.pending);
        builder.addCase(fetchOrderTrenData.fulfilled,(state,action : PayloadAction<OrderTrendDto[]>)=>{
            state.Data = action.payload;
        })
    }
})

export const {setOrderTrendData,addOrderDateList,deleteOrderDateList} = orderTrendSlice.actions;

export default orderTrendSlice.reducer;