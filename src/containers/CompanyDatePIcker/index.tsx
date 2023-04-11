import { TextField } from "@mui/material";
import { DesktopDatePicker,  LocalizationProvider } from "@mui/x-date-pickers";
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useEffect } from "react";
import { useState } from "react";
import { useAppDispatch } from "../../shared/utils/redux/selectors/hooks";
import { setDateString } from "../CompanyOrderTrend/reducer";
import { AppDispatch } from "../../shared/utils/redux/store";
import { DateChip } from "../../components/DateChip";
import { DateListBox } from "../CompanyOrderTrend/styledComponents";

const CompanyDatePicker = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const [dateList, SetDateList] = useState<string[]>([]);
  const [year,setYear]=useState(false)
  const dispatch:AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDateString(dateList));
  }, [dateList,dispatch]);
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          className="sha"
          label='Select Dates'
          value={value}
          disableFuture={true}
          onYearChange={()=>{ 
             setYear(!year)
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
          renderInput={(params) => <TextField  size="small"{...params} />}
        />
      </LocalizationProvider>
      <DateListBox>
        {dateList.map((e, index) => {
          return (
              <DateChip 
                key={index}
                label={e}
                icon={
                <HighlightOffTwoToneIcon 
                style={{
                  position:"absolute",
                  right:"10px",
                }
              }
              onClick={() =>
                SetDateList(dateList.filter((item) => item !== e))
              }
/>}
                variant="outlined"
              />
          );
        })}
      </DateListBox>
    </div>
  );
};

export default CompanyDatePicker;
