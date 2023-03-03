import { Chip, TextField } from "@mui/material";
import { DatePicker, DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DangerousIcon from '@mui/icons-material/Dangerous';
import dayjs, { Dayjs } from "dayjs";
import { useEffect } from "react";
import { useState } from "react";
import { useAppDispatch } from "../shared/utils/redux/hooks";
import { setDateString } from "../shared/utils/redux/reducers/companyReducer";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
const CompanyDatePicker = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const [dateList, SetDateList] = useState<string[]>([]);
  const dispatch = useAppDispatch();

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
          label='select Dates'
          value={value}
          onChange={()=>false}
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
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <div className="dateListbox">
        {dateList.map((e, index) => {
          return (
            <>
              <Chip
                key={index}
                className="chipObject"
                label={e}
                icon={<DangerousIcon/>}
                variant="outlined"
                onClick={() =>
                  SetDateList(dateList.filter((item) => item != e))
                }
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyDatePicker;
