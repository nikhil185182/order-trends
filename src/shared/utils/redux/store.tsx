import { configureStore } from "@reduxjs/toolkit";
import orderTrendReducer from "../../../containers/OrderTrend/reducer";
import appReducer from "./reducers/appReducer";
import reducer from "../../../containers/CompanyOrderTrend/reducer";
import CompaniesEnrolled from "../../../containers/CompaniesEnrolled/reducer"
import InactiveUserSlice from "../../../containers/InactiveCustomers/reducer";


const store = configureStore({
    reducer: {
        globalState : appReducer,
        orderTrend: orderTrendReducer,
        NewUser: CompaniesEnrolled,
        company: reducer,
        InactiveUsers: InactiveUserSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
