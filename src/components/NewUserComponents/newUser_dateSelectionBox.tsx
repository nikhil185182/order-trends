import { TextField, Button, Typography, TextFieldProps } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { JSXElementConstructor, ReactElement, useState } from "react";
import { newUser_datepickers_Title } from "../../shared/config";
import {
  settingfromdate,
  settingtodate,
  toggleDrawer,
} from "../../shared/utils/redux/reducers/newUserReducer";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/utils/redux/selectors/hooks";
import { AppDispatch } from "../../shared/utils/redux/store";

//import "../../shared/css/newUserDemo.css";
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
  fromdate.setDate(fromdate.getDate() - 60);
  const [defaultfrom, setfrom] = useState<Date>(fromdate);
  const [defaultto, setto] = useState<Date>(new Date());
  const dispatch: AppDispatch = useAppDispatch();
  const defaultdates = useAppSelector((state) => state.NewUser);
  
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
              onChange={(selectedfromdate) => {
                setfrom(selectedfromdate?.toDate()!);
              }}
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
              onChange={(selectedtodate) => {
                if (selectedtodate?.toDate()! > defaultfrom) {
                  setto(selectedtodate?.toDate()!);
                } else {
                  alert("Select the To date After The from Date ");
                }
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </NewUser_Each_Datepicker>
      </ToContainer>
      <NewUser_submit_btn>
        <Button
          variant="contained"
          style={{ backgroundColor: "#54B948" }}
          onClick={() => {
            dispatch(settingfromdate(defaultfrom.toLocaleDateString()!));
            dispatch(settingtodate(defaultto.toLocaleDateString()!));
          }}
        >
          Submit
        </Button>
      </NewUser_submit_btn>
    </NewUserDatepickers>
  );
}
