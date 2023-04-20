import { RootState } from "../../../shared/utils/redux/store";

export const getIsDrawerOpen = (state: RootState) =>state.EnrolledCompanies.isDrawerOpen;
export const getListOfCompanies = (state : RootState) => state.EnrolledCompanies.tempCompaniesList;
export const getChartClickedDate = (state : RootState) => state.EnrolledCompanies.chartClickedDate;

