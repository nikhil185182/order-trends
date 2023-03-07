import { configureStore } from "@reduxjs/toolkit";
import orderTrendReducer from "./reducers/orderTrendReducer";

 const store =configureStore({
    reducer:{
        orderTrend : orderTrendReducer,
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store