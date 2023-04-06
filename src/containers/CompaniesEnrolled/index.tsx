import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/utils/redux/selectors/hooks";
import {
  StyledCompaniesEnrolled,
  StyledDateSelector,
  StyledEnrolledCompaniesChart,
} from "./styledComponents";
import { AppDispatch } from "../../shared/utils/redux/store";
import React from "react";
import DateSelector from "../DateRangeSelection";
import InformationDisplay from "../InformationDisplay";
import CompaniesEnrolledChart from "../CompaniesEnrolledChart";
import SideBar from "../SideBar";
import { fetchFeature } from "../../shared/utils/redux/reducers/appReducer";
import { FetchCompaniesEnrolledData } from "./reducer";

export default function CompaniesEnrolled() {
  const dispatch: AppDispatch = useAppDispatch();
  dispatch(fetchFeature([false,false,true,false])); 
  dispatch(FetchCompaniesEnrolledData());

  const IsDrawerOpen = useAppSelector((state) => state.EnrolledCompanies.isDrawerOpen);

  return (
    <React.Fragment>
      <StyledCompaniesEnrolled>
        <StyledDateSelector>
          <DateSelector />
          <InformationDisplay />
        </StyledDateSelector>
        <StyledEnrolledCompaniesChart IsDrawerOpen={IsDrawerOpen}>
          <CompaniesEnrolledChart />
        </StyledEnrolledCompaniesChart>
      </StyledCompaniesEnrolled>
      <SideBar />
    </React.Fragment>
  );
}
