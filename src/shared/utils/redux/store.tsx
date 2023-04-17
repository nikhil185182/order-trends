import { configureStore } from "@reduxjs/toolkit";
import orderTrendReducer from "../../../containers/OrderTrend/reducer";
import CompaniesEnrolled from "../../../containers/CompaniesEnrolled/reducer"
import InactiveUserSlice from "../../../containers/InactiveCustomers/reducer";
import companysSlice from "../../../containers/CompanyOrderTrend/reducer";
import appReducer from "./appReducer";


const store = configureStore({
    reducer: {
        app : appReducer,
        orderTrend: orderTrendReducer,
        EnrolledCompanies: CompaniesEnrolled,
        company: companysSlice.reducer,
        InactiveUsers: InactiveUserSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
