import { RootState } from "../../shared/utils/redux/store";

export const getconsoleMessage = (state : RootState) => state.app.consoleMessage;
export const getconsoleOpen = (state : RootState) => state.app.consoleOpen;