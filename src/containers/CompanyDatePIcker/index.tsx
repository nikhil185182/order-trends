import { Chip, TextField, TextFieldProps } from "@mui/material";
import { LocalizationProvider,DatePicker } from "@mui/x-date-pickers";
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useEffect } from "react";
import { useState } from "react";
import { useAppDispatch } from "../../shared/utils/redux/selectors/hooks";
import { setDateString } from "../CompanyOrderTrend/reducer";
import { AppDispatch } from "../../shared/utils/redux/store";
import { randomInt } from "crypto";




const CompanyDatePicker = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const [dateList, SetDateList] = useState<string[]>([]);
  const [year,setYear]=useState(false)
  const dispatch:AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDateString(dateList));
    console.log("====================================");
    console.log(dateList);
    console.log("====================================");
  }, [dateList,dispatch]);
  return (
    <div className="dateComp">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="sha"
          label='Select Dates'
          value={value}
          disableFuture={true}
          onYearChange={()=>{
             console.log('====================================');
             console.log(`year changed`);
             setYear(!year)
             console.log('====================================');
          }}
          views={['year','month','day']}
          onChange={()=>true}
          onAccept={(newValue:any) => {
            setValue(newValue);
            const monthVal: number = newValue?.get("month")! + 1;
            const mVal: string =
              monthVal < 10 ? "0" + monthVal : monthVal.toString();

            const val: string =
              newValue?.get("year").toString()! +
              "-" +
              mVal +
              "-" +
              newValue?.get("date").toString()!;
            if(dateList.indexOf(val)===-1)
              SetDateList([...dateList, val]);
            else
              alert("you've already selected it")
            setValue(null);
          }}
          renderInput={(params) => <TextField  {...params} />}
        />
      </LocalizationProvider>
      <div className="dateListbox">
        {dateList.map((e, index) => {
          return (
            
              <Chip
              
               style={{
                position:"relative",
               }}
                key={index}
                className="chipObject"
                label={e}
                icon={
                <HighlightOffTwoToneIcon 
                style={{
                  position:"absolute",
                  right:"10px",
                }
              }
              onClick={() =>
                SetDateList(dateList.filter((item) => item != e))
              }
/>}
                variant="outlined"
              />
           
          );
        })}
      </div>
    </div>
  );
};

export default CompanyDatePicker;
