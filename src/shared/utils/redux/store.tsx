import { configureStore } from "@reduxjs/toolkit";
import orderTrendReducer from "./reducers/orderTrendReducer";
import newUserReducer from "./reducers/newUserReducer";

 const store =configureStore({
    reducer:{
        orderTrend : orderTrendReducer,
        NewUser: newUserReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
