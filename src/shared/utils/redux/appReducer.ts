import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type GlobalState = {
  consoleMessage: string;
  consoleOpen: boolean;
};

const initialState: GlobalState = {
  consoleMessage: "",
  consoleOpen: false,
};

const appSlice = createSlice({
  name: "globalState",
  initialState: initialState,
  reducers: {
    setConsoleOpen: (state, action: PayloadAction<boolean>) => {
      state.consoleOpen = action.payload;
    },
    setConsoleMessage: (state, action: PayloadAction<string>) => {
      state.consoleMessage = action.payload;
    },
  },
});

export const { setConsoleOpen, setConsoleMessage } = appSlice.actions;

export default appSlice.reducer;
