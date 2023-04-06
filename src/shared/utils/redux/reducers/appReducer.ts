import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type dto = {
    appState : string;
    feature : string;
}

const initialState :  dto = {
    appState : "",
    feature : "orderTrend"
}

const appSlice = createSlice({
    name : "AppGlobalData",
    initialState : initialState,
    reducers : {
        fetchFeature : (state,action : PayloadAction<string>)=>{
            state.feature = action.payload;
        }
    }
});

export const {fetchFeature} = appSlice.actions;

export default appSlice.reducer;