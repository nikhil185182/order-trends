import { RootState } from "../../../shared/utils/redux/store";

export const tableSelector = (state: RootState) => state.InactiveUsers.inactiveUsers;
