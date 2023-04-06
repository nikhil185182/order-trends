import { Bar, Line } from "react-chartjs-2";
import {
  ActiveElement,
  ChartEvent,
  LineElement,
  PointElement,

} from "chart.js";


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
} from "../../shared/utils/redux/selectors/hooks";
import {

  FormControl,
  FormControlLabel,

  Radio,
  RadioGroup,

} from "@mui/material";
import { AppDispatch } from "../../shared/utils/redux/store";

import "../../shared/css/newUserDemo.css";
import { toggleDrawer, updateCompaniesList, updatebarclickedDate, toggleLineOrBar } from "../../containers/newCustomers/Reducer";
import { ChartHeading_div, Bothbuttons } from "../../containers/newCustomers/StyledComponents";
import { ConvertedfromandToDates } from "../../containers/newCustomers/Utils";
import { NewUsersDTO } from "../../containers/newCustomers/models";



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

export default function NewUserChart() {
  const isLine = useAppSelector((state) => state.NewUser.isLineOrBar);
  const dates=ConvertedfromandToDates();
  let from_final=dates[0];
  let to_final=dates[1];
const dispatch: AppDispatch = useAppDispatch();
  const newusersdatafromstore: NewUsersDTO[] = useAppSelector(
    (state) => state.NewUser.newUsersdata
  );

  const Handleclickes = (event: ChartEvent, chartelement: ActiveElement[]) => {
    if (chartelement.length >= 1) {
      console.log("bar is clicked");
      const clickedBar = chartelement[0];
      console.log(clickedBar);

      const tempdate = newusersdatafromstore.map(
        (item) => item.companyCreatedTimeStamp
      )[chartelement[0].index];
      const x = newusersdatafromstore.find(
        (item) => item.companyCreatedTimeStamp === tempdate
      );
      dispatch(toggleDrawer(true));
      dispatch(updateCompaniesList(x?.namesOfCompanies!));
      dispatch(updatebarclickedDate(x?.companyCreatedTimeStamp!));
    } else {
      console.log("bar not clikced");
    }
  };

  const lineoptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        ticks: {
       stepSize: 1
        },
        min:0,
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
  const baroptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          // forces step size to be 1 units
          stepSize: 1
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
    labels: newusersdatafromstore.map((item) => item.companyCreatedTimeStamp),

    datasets: [
      {
        label: "New Registrations",
        data: newusersdatafromstore.map((item) => item.frequency),
        backgroundColor: "#55B74E",
        borderColor: "#55B74E",
        pointBackgroundColor: "#537FE7",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };
  const barchart_Click=()=>{
    dispatch(toggleLineOrBar(true))
  }
  const linechart_Click=()=>{
    dispatch(toggleLineOrBar(false))
  }
 

  return (
    <>
      <ChartHeading_div>
      Company Enrollments from {from_final.toDateString()} -{" "}
{to_final.toDateString()}
      </ChartHeading_div>
      {isLine ? (
        <Bar data={Data} options={baroptions} />
      ) : (
        <Line data={Data} options={lineoptions} />
      )}

      <Bothbuttons>
        <FormControl>
          <RadioGroup row>
            <FormControlLabel
              control={
                <Radio
                  style={{ color: "#54B948" }}
                  onClick={barchart_Click}
                  checked={isLine}
                />
              }
              label="Bar Chart"
            />
            <FormControlLabel
              control={
                <Radio
                  style={{ color: "#54B948" }}
                  onClick={linechart_Click}
                  checked={!isLine}
                />
              }
              label="Line Chart"
            />
          </RadioGroup>
        </FormControl>
      </Bothbuttons>
    </>
  );
}
