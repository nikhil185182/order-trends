import { Bar, Line } from "react-chartjs-2";
import { ActiveElement, ChartEvent, LineElement, PointElement } from "chart.js";
import {
  toggleDrawer,
  toggleLineOrBar,
  updatebarclickedDate,
  updateCompaniesList,
} from "../CompaniesEnrolled/reducer";

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
} from "../../shared/utils/redux/hooks";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { AppDispatch } from "../../shared/utils/redux/store";

//import "../../shared/css/newUserDemo.css";
import {
  DateTypeCast,
} from "../CompaniesEnrolled/utils";
import React from "react";
import { StyledButtons, StyledChartHeading } from "./StyledComponents";
import { CompaniesEnrolledDTO } from "../CompaniesEnrolled/models";

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
  const IsLine = useAppSelector((state) => state.EnrolledCompanies.isLineOrBar);
  const fromDate = useAppSelector((state) => state.EnrolledCompanies.fromDate);
  const toDate = useAppSelector((state) => state.EnrolledCompanies.toDate);
  let fromFinal = DateTypeCast(fromDate);
  let toFinal = DateTypeCast(toDate);
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

  const LineOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        ticks: {
          stepSize: 1,
        },
        min: 0,
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            console.log(context);
            return [
              `New Enrollments: ${context.raw}`,
              "Click on it to Get Companies Info",
            ];
          },
        },
      },
      label: false,
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "New Enrollments",
        fontSize: 100,
      },
    },
    onClick: Handleclickes,
  };
  const BarOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepSize: 1,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return [
              `New Enrollments: ${context.raw}`,
              "Click on it to Get Enrolled Companies",
            ];
          },
        },
      },

      label: false,
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "New Enrollments",
        fontSize: 100,
      },
    },
    onClick: Handleclickes,
  };

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
  const BarChart_Click = () => {
    dispatch(toggleLineOrBar(true));
  };
  const LineChart_Click = () => {
    dispatch(toggleLineOrBar(false));
  };

  return (
    <React.Fragment>
      <StyledChartHeading>
        Company Enrollments from {fromFinal.toDateString()} -
        {toFinal.toDateString()}
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
                <Radio
                  style={{ color: "#54B948" }}
                  onClick={BarChart_Click}
                  checked={IsLine}
                />
              }
              label="Bar Chart"
            />
            <FormControlLabel
              control={
                <Radio
                  style={{ color: "#54B948" }}
                  onClick={LineChart_Click}
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
