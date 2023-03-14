import { Chip, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {ClearRounded} from '@mui/icons-material';
import dayjs, { Dayjs } from "dayjs";
import { useEffect } from "react";
import { useState } from "react";
import { useAppDispatch } from "../../shared/utils/redux/selectors/hooks";
import { setDateString } from "../../shared/utils/redux/reducers/companyReducer";
import { AppDispatch } from "../../shared/utils/redux/store";

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
        <DesktopDatePicker
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
          onChange={()=>true}
          onAccept={(newValue) => {
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
          renderInput={(params) => <TextField size="small" color="secondary" {...params} />}
        />
      </LocalizationProvider>
      <div className="dateListbox">
        {dateList.map((e, index) => {
          return (
            <>
              <Chip
               style={{
                position:"relative",
               }}
                key={index}
                className="chipObject"
                label={e}
                icon={
                <ClearRounded 
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
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyDatePicker;
