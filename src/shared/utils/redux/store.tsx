import { configureStore } from "@reduxjs/toolkit";
import orderTrendReducer from "../../../containers/OrderTrend/reducer";
import newUserReducer from "./reducers/newUserReducer";
import companyReducer from "../../../containers/CompanyOrderTrend/reducer";
import InactiveUserSlice from "./reducers/InactiveUserReducer";

const store = configureStore({
    reducer: {
        orderTrend: orderTrendReducer,
        NewUser: newUserReducer,
        company: companyReducer,
        InactiveUsers: InactiveUserSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
