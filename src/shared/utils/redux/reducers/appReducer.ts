import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type dto = {
    appState : string;
    feature : boolean[];
}

const initialState :  dto = {
    appState : "",
    feature : [false,false,false,false]
}

const appSlice = createSlice({
    name : "AppGlobalData",
    initialState : initialState,
    reducers : {
        fetchFeature : (state,action : PayloadAction<boolean[]>)=>{
            state.feature = action.payload;
        }
    }
});

export const {fetchFeature} = appSlice.actions;

export default appSlice.reducer;