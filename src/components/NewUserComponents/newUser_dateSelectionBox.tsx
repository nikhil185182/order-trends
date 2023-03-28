import { TextField, Button,} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { newUser_datepickers_Title } from "../../shared/config";
import {
  settingfromdate,
  settingtodate,
} from "../../shared/utils/redux/reducers/newUserReducer";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/utils/redux/selectors/hooks";
import { AppDispatch } from "../../shared/utils/redux/store";
import {
  FromContainer,
  NewUserDatepickers,
  NewUser_datePicker_title_Typography,
  NewUser_Each_Datepicker,
  NewUser_submit_btn,
   ToContainer,
} from "../../shared/styledComponents/newUserComponentsStyled";

export default function NewUserDate_selectionBox() {
  const fromdate: Date = new Date();
  fromdate.setDate(fromdate.getDate() - 75);
  const [defaultfrom, setfrom] = useState<Date>(fromdate);
  const [defaultto, setto] = useState<Date>(new Date());
  const dispatch: AppDispatch = useAppDispatch();
  const defaultdates = useAppSelector((state) => state.NewUser);
  const onchangefromdate=(selectedfromdate:dayjs.Dayjs) => {
    setfrom(selectedfromdate?.toDate()!);
  }
  const onchangetodate=(selectedtodate:dayjs.Dayjs) => {
    if (selectedtodate?.toDate()! > defaultfrom) {
      setto(selectedtodate?.toDate()!);
    } else {
      alert("Select the To date After The from Date ");
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
              value={dayjs(defaultdates.fromDate)}
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
              value={dayjs(defaultdates.toDate)}
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
