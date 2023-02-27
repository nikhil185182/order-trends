import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./reducers/companyReducer";
import InactiveUserSlice from "./reducers/InactiveUsersReducer";
import newUserSlice from "./reducers/InactiveUsersReducer";

const store = configureStore({
    reducer: {
        company: companyReducer,
        NewUser: newUserSlice.reducer,
        InactiveUsers: InactiveUserSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export default store