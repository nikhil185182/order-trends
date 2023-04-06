import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/utils/redux/selectors/hooks";
import {
  StyledCompaniesEnrolled,
  StyledDateSelector,
  StyledEnrolledCompaniesChart,
} from "./styledComponents";
import { Fetchnewusersdata } from "./reducer";
import { AppDispatch } from "../../shared/utils/redux/store";
import React from "react";
import DateSelector from "../DateRangeSelection";
import InformationDisplay from "../InformationDisplay";
import CompaniesEnrolledChart from "../CompaniesEnrolledChart";
import SideBar from "../SideBar";

export default function CompaniesEnrolled() {
  const dispatch: AppDispatch = useAppDispatch();
  dispatch(Fetchnewusersdata());

  const IsDrawerOpen = useAppSelector((state) => state.NewUser.isDrawerOpen);

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
