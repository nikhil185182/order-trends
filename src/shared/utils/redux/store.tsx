import { configureStore } from "@reduxjs/toolkit";
import orderTrendReducer from "./reducers/orderTrendReducer";
import newUserReducer from "./reducers/newUserReducer";
import companyReducer from "./reducers/companyReducer";
import InactiveUserSlice from "./reducers/InactiveUserReducer";

 const store =configureStore({
    reducer:{
        orderTrend : orderTrendReducer,
        NewUser: newUserReducer, 
        company:companyReducer,
        InactiveUsers: InactiveUserSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
