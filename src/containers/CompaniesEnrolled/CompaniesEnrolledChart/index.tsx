import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { ActiveElement, ChartEvent, LineElement, PointElement } from "chart.js";
import {
  toggleDrawer,
  toggleLineOrBar,
  updatebarclickedDate,
  updateCompaniesList,
} from "../reducer";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/utils/redux/hooks";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import { AppDispatch } from "../../../shared/utils/redux/store";
import { DateTypeCast } from "../utils";
import { StyledButtons, StyledChartHeading } from "./StyledComponents";
import { CompaniesEnrolledDTO } from "../models";
import { lineOptions, barOptions } from "./constants";
import { RadioButton } from "../../../components/RadioButton";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

export default function CompaniesEnrolledChart() {
  const IsLine = useAppSelector((state) => state.EnrolledCompanies.isLineChart);
  const fromDate = useAppSelector((state) => state.EnrolledCompanies.fromDate);
  const toDate = useAppSelector((state) => state.EnrolledCompanies.toDate);

  let fromFinal = DateTypeCast(fromDate).toDateString();
  let toFinal = DateTypeCast(toDate).toDateString();

  const dispatch: AppDispatch = useAppDispatch();
  const NewUsersDataFromStore: CompaniesEnrolledDTO[] = useAppSelector(
    (state) => state.EnrolledCompanies.newUsersdata
  );

  const Handleclickes = (event: ChartEvent, chartelement: ActiveElement[]) => {
    if (chartelement.length >= 1) {
      const tempdate = NewUsersDataFromStore.map(
        (item) => item.companyCreatedTimeStamp
      )[chartelement[0].index];
      const x = NewUsersDataFromStore.find(
        (item) => item.companyCreatedTimeStamp === tempdate
      );
      dispatch(toggleDrawer(true));
      dispatch(updateCompaniesList(x?.namesOfCompanies!));
      dispatch(updatebarclickedDate(x?.companyCreatedTimeStamp!));
    }
  };

  const LineOptions = { ...lineOptions, onClick: Handleclickes };
  const BarOptions = { ...barOptions, onClick: Handleclickes };

  const Data = {
    labels: NewUsersDataFromStore.map((item) => item.companyCreatedTimeStamp),
    datasets: [
      {
        label: "New Registrations",
        data: NewUsersDataFromStore.map((item) => item.frequency),
        backgroundColor: "#55B74E",
        borderColor: "#55B74E",
        pointBackgroundColor: "#537FE7",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  const handleChartToggle = (flag: boolean) => dispatch(toggleLineOrBar(flag));

  return (
    <React.Fragment>
      <StyledChartHeading>
        Company Enrollments from {fromFinal} - {toFinal}
      </StyledChartHeading>
      {IsLine ? (
        <Bar data={Data} options={BarOptions} />
      ) : (
        <Line data={Data} options={LineOptions} />
      )}
      <StyledButtons>
        <FormControl>
          <RadioGroup row>
            <FormControlLabel
              control={
                <RadioButton
                  onClick={() => handleChartToggle(true)}
                  checked={IsLine}
                />
              }
              label="Bar Chart"
            />
            <FormControlLabel
              control={
                <RadioButton
                  onClick={() => handleChartToggle(false)}
                  checked={!IsLine}
                />
              }
              label="Line Chart"
            />
          </RadioGroup>
        </FormControl>
      </StyledButtons>
    </React.Fragment>
  );
}
