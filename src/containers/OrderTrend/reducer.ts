import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Orders, OrderTrendGQLResponse, OrderTrendState } from "./models";
import { ORDERTREND_DUMMY_DATA } from "../../shared/global_constants";
import { useQuery } from "@apollo/client";
import { ORDERTREND_QUERY } from "./queries";
import { DAYS } from "../../shared/config";
import { OrderTrendUtil } from "./utils";

const initialState: OrderTrendState = {
  statistics: {
    Data: [ORDERTREND_DUMMY_DATA],
    chartToggle: true,
    days: 30,
  },
  compare: {
    orderDateList: [],
  },
  status: "",
};

//ASYNC ACTION
export const fetchOrderTrenData = createAsyncThunk(
  "orderTrend/fetch",
  async (thunkAPI) => {
    const { data } = useQuery<OrderTrendGQLResponse>(ORDERTREND_QUERY, {
      variables: { input: DAYS },
    });

    console.log("Order trend");
    const result = OrderTrendUtil(data!);
    return result;
  }
);

const orderTrendSlice = createSlice({
  name: "orderTrendData",
  initialState: initialState,
  reducers: {
    setOrderTrendData: (state, action: PayloadAction<OrderTrendState>) => {
      state.statistics.Data = action.payload.statistics.Data;
    },
    setOrderTrendChart: (state, action: PayloadAction<boolean>) => {
      state.statistics.chartToggle = action.payload;
    },
    setOrderTrendDays: (state, action: PayloadAction<number>) => {
      state.statistics.days = action.payload;
    },
    addOrderDateList: (state, action: PayloadAction<Orders>) => {
      var temp = state.compare.orderDateList;
      temp.push(action.payload);
      state.compare.orderDateList = temp;
    },
    deleteOrderDateList: (state, action: PayloadAction<Orders>) => {
    
      state.compare.orderDateList.splice(
        state.compare.orderDateList.findIndex(
          (item) => item !== action.payload
        ),
        1
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderTrenData.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(
        fetchOrderTrenData.fulfilled,
        (state, action: PayloadAction<Orders[]>) => {
          state.statistics.Data = action.payload;

          state.status = "Fulfilled";
        }
      )
      .addCase(fetchOrderTrenData.rejected, (state) => {
        state.status = "Rejected";
      });
  },
});

export const {
  setOrderTrendData,
  setOrderTrendChart,
  setOrderTrendDays,
  addOrderDateList,
  deleteOrderDateList,
} = orderTrendSlice.actions;

export default orderTrendSlice.reducer;
