import { TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { newUser_datepickers_Title } from "../../shared/global_constants";
import { settingfromdate, settingtodate } from "../CompaniesEnrolled/reducer";
import { useAppDispatch } from "../../shared/utils/redux/hooks";
import { AppDispatch } from "../../shared/utils/redux/store";
import { alertMessage } from "../../shared/global_constants";
import {
  StyledDateSelectionRange,
  StyledFromContainer,
  StyledToContainer,
  StyledDatePicker,
  StyledSubmitBtn,
  StyledDateRange,
} from "./StyledComponents";
import { ContainedButton } from "../../components/ConatinedButton";
import { setConsoleMessage, setConsoleOpen } from "../../shared/utils/redux/appReducer";

export default function DateSelector() {
  const dispatch: AppDispatch = useAppDispatch();
  const fromdate: Date = new Date();
  fromdate.setDate(fromdate.getDate() - 75);
  const [defaultfrom, setfrom] = useState<Date>(fromdate);
  const [defaultto, setto] = useState<Date>(new Date());

  const displayPopUp = (message: string) => {
    dispatch(setConsoleMessage(message));
    dispatch(setConsoleOpen(true));
  };

  const OnChangeFromDate = (selectedfromdate: dayjs.Dayjs) => {
    if (selectedfromdate?.toDate()! < defaultto) {
      setfrom(selectedfromdate?.toDate()!);
    } else {
      displayPopUp(alertMessage);
    }
  };
  const OnChangeToDate = (selectedtodate: dayjs.Dayjs) => {
    if (selectedtodate?.toDate()! > defaultfrom) {
      setto(selectedtodate?.toDate()!);
    } else {
      displayPopUp(alertMessage);
    }
  };
  const SubmitClick = () => {
    dispatch(settingfromdate(defaultfrom.toLocaleDateString()!));
    dispatch(settingtodate(defaultto.toLocaleDateString()!));
  };

  return (
    <StyledDateSelectionRange>
      <StyledDateRange>{newUser_datepickers_Title}</StyledDateRange>
      <StyledFromContainer>
        <StyledDatePicker>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat="DD/MM/YYYY"
              label="From"
              views={["year", "month", "day"]}
              value={dayjs(defaultfrom)}
              onChange={(selectedfromdate: dayjs.Dayjs | null) =>
                OnChangeFromDate(selectedfromdate!)
              }
              renderInput={(params: any) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </StyledDatePicker>
      </StyledFromContainer>
      <StyledToContainer>
        <StyledDatePicker>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat="DD/MM/YYYY"
              label="To"
              views={["year", "month", "day"]}
              value={dayjs(defaultto)}
              onChange={(selectedtodate: dayjs.Dayjs | null) =>
                OnChangeToDate(selectedtodate!)
              }
              renderInput={(params: any) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </StyledDatePicker>
      </StyledToContainer>
      <StyledSubmitBtn>
        <ContainedButton onClick={() => SubmitClick()}>SUBMIT</ContainedButton>
      </StyledSubmitBtn>
    </StyledDateSelectionRange>
  );
}
