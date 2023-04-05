import { TextField, Button,} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { newUser_datepickers_Title } from "../../shared/global_constants";
import {
  settingfromdate,
  settingtodate,
} from "../../containers/newCustomers/Reducer";
import {
  useAppDispatch
} from "../../shared/utils/redux/selectors/hooks";
import { AppDispatch } from "../../shared/utils/redux/store";
import {
  FromContainer,
  NewUserDatepickers,
  NewUser_datePicker_title_Typography,
  NewUser_Each_Datepicker,
  NewUser_submit_btn,
   ToContainer,
} from "../../containers/newCustomers/StyledComponents";
import { alertMessage } from "../../shared/global_constants";

export default function NewUserDate_selectionBox() {
  const dispatch: AppDispatch = useAppDispatch();
  const fromdate: Date = new Date();
  fromdate.setDate(fromdate.getDate() - 75);
  const [defaultfrom, setfrom] = useState<Date>(fromdate);
  const [defaultto, setto] = useState<Date>(new Date());

  const onchangefromdate=(selectedfromdate:dayjs.Dayjs) => {
  
  setfrom(selectedfromdate?.toDate()!);
  }
  const onchangetodate=(selectedtodate:dayjs.Dayjs) => {
    if (selectedtodate?.toDate()! > defaultfrom) {
      setto(selectedtodate?.toDate()!);
    } else {
      alert(alertMessage);
    }
  }
  const submitClick=() => {
   
    dispatch(settingfromdate(defaultfrom.toLocaleDateString()!));
    dispatch(settingtodate(defaultto.toLocaleDateString()!));
  }

  return (
    <NewUserDatepickers>
      <NewUser_datePicker_title_Typography>
        {newUser_datepickers_Title}
      </NewUser_datePicker_title_Typography>
      <FromContainer>
        <NewUser_Each_Datepicker>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat="DD/MM/YYYY"
              label="From"
              views={['year', 'month', 'day']}
              value={dayjs(defaultfrom)}
              onChange={(selectedfromdate:dayjs.Dayjs|null)=>onchangefromdate(selectedfromdate!)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </NewUser_Each_Datepicker>
      </FromContainer>
      <ToContainer>
        <NewUser_Each_Datepicker>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat="DD/MM/YYYY"
              label="To"
              views={['year', 'month', 'day']}
              value={dayjs(defaultto)}
              onChange={(selectedtodate:dayjs.Dayjs|null)=>onchangetodate(selectedtodate!)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </NewUser_Each_Datepicker>
      </ToContainer>
      <NewUser_submit_btn>
        <Button
          variant="contained"
          style={{ backgroundColor: "#54B948" }}
          onClick={() => submitClick()}
        >
          Submit
        </Button>
      </NewUser_submit_btn>
    </NewUserDatepickers>
  );
}
