import { RootState } from "./store";

export const inactiveSelector = (state: RootState) => state.InactiveUsers.GQL_list;

