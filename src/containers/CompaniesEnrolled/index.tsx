import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/utils/redux/hooks";
import {
  StyledCompaniesEnrolled,
  StyledEnrolledCompaniesChart,
} from "./styledComponents";
import { AppDispatch } from "../../shared/utils/redux/store";
import React from "react";
import CompaniesEnrolledChart from "./CompaniesEnrolledChart";
import SideBar from "./SideBar";
import { FetchCompaniesEnrolledData } from "./reducer";
import DateInformation from "./DateInformation";

export default function CompaniesEnrolled() {
  const dispatch: AppDispatch = useAppDispatch();
  dispatch(FetchCompaniesEnrolledData());

  const IsDrawerOpen = useAppSelector((state) => state.EnrolledCompanies.isDrawerOpen);

  return (
    <React.Fragment>
      <StyledCompaniesEnrolled>
        <DateInformation/>
        <StyledEnrolledCompaniesChart IsDrawerOpen={IsDrawerOpen}>
          <CompaniesEnrolledChart />
        </StyledEnrolledCompaniesChart>
      </StyledCompaniesEnrolled>
      <SideBar />
    </React.Fragment>
  );
}
