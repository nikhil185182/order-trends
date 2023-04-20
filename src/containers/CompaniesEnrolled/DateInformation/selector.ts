import { RootState } from "../../../shared/utils/redux/store";

export const getFromDate = (state: RootState) =>state.EnrolledCompanies.fromDate;
export const getToDate = (state: RootState) =>state.EnrolledCompanies.toDate;
export const getCompanyInfo = (state: RootState) =>state.EnrolledCompanies.newUsersdata;
