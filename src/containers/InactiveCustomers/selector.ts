import { RootState } from "../../shared/utils/redux/store";

export const inactiveSelector = (state: RootState) => state.InactiveUsers.GQL_list;

