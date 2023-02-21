import { useState } from "react";
import { reqbody, } from "../shared/dto/companyLevelOrderDTO";
import "../shared/css/companyLevel.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, TextField } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Dayjs } from "dayjs";
import { Data } from "./data";




const CompanyTrend = () => {

  const [cs,setCs] = useState("");
  const [ds,setDs] = useState("");
  const [value, setValue] = useState<Dayjs | null>(null);


 const param : reqbody ={
  companyString:cs,
  dateString:ds
 }
 



 

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <Button>renderInput</Button>
      <div className="MainContainer">
        <div className="SubContainerOne">
          <div className="DateComponent">
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Dates"
                  value={value}
                  renderInput={(params) => <TextField {...params} />} 
                  onChange={function (value: Dayjs | null, keyboardInputValue?: string | undefined): void {
                    throw new Error("Function not implemented.");
                  } }                />
              </LocalizationProvider>
            </div>
            <div className="DateChipsComponent">
            {
                       
                    }
            </div>
          </div>
          <div className="SearchbarComponent">
            <p>companysearchbar</p>
          </div>
        </div>
        <div className="SubContainerTwo">
          <p>Charts</p>
          <Line
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Users Gained between 2016-2020",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyTrend;
