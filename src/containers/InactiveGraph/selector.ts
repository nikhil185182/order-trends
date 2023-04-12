import { RootState } from "../../shared/utils/redux/store";

export const inactivegraphSelector = (state: RootState) => state.InactiveUsers.GQL_list;
