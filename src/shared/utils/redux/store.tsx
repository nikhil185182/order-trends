import { configureStore } from "@reduxjs/toolkit";
import orderTrendReducer from "../../../containers/OrderTrend/reducer";
import newUserReducer from "../../../containers/newCustomers/Reducer";
import InactiveUserSlice from "./reducers/InactiveUserReducer";
import reducer from "../../../containers/CompanyOrderTrend/reducer";

const store = configureStore({
    reducer: {
        orderTrend: orderTrendReducer,
        NewUser: newUserReducer,
        company: reducer,
        InactiveUsers: InactiveUserSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
