import { configureStore } from "@reduxjs/toolkit";
import orderTrendReducer from "../../../containers/OrderTrend/reducer";
import newUserReducer from "../../../containers/newCustomers/Reducer";
import companyReducer from "./reducers/companyReducer";
import InactiveUserSlice from "../../../containers/InactiveCustomers/reducer";

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
