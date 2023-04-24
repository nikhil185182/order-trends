import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { newUser_datepickers_Title } from "../../../shared/global_constants";
import {
  fetchCompaniesEnrolledData,
  settingfromdate,
  settingtodate,
} from "../reducer";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/utils/redux/hooks";
import { AppDispatch } from "../../../shared/utils/redux/store";
import { alertMessage } from "../../../shared/global_constants";
import {
  StyledDateSelectionRange,
  StyledFromContainer,
  StyledToContainer,
  StyledDatePicker,
  StyledSubmitBtn,
  StyledDateRange,
} from "./StyledComponents";
import { ContainedButton } from "../../../components/ConatinedButton";
import {
  setConsoleMessage,
  setConsoleOpen,
} from "../../../shared/utils/redux/appReducer";
import {
  DateTypeCast,
  getDifferenceOfDays,
  getFrequency,
  getPastDate,
} from "../utils";
import {
  StyledTableBody,
  StyledTitle,
  StyledTableContainer,
} from "./StyledComponents";
import { StyledDateSelector } from "../styledComponents";
import { getFromDate, getToDate, getCompanyInfo } from "./selector";
import { useQuery } from "@apollo/client";
import { CompaniesEnrolledDTO, CompaniesEnrolledType } from "../models";
import { CompaniesEnrolledQuery } from "../queries";

export default function DateInformation() {
  const dispatch: AppDispatch = useAppDispatch();

  const [fromDate, setFromDate] = useState<Date>(getPastDate(new Date(), 75));
  const [toDate, setToDate] = useState<Date>(new Date());

  const displayPopUp = (message: string) => {
    dispatch(setConsoleMessage(message));
    dispatch(setConsoleOpen(true));
  };

  const handleOnChange = (
    newValue: dayjs.Dayjs | null,
    fromDatePicker: boolean
  ) => {
    const flag = fromDatePicker
      ? newValue?.toDate()! < toDate
      : newValue?.toDate()! > fromDate;
    if (fromDatePicker) {
      if (flag) setFromDate(newValue?.toDate()!);
      else displayPopUp(alertMessage);
    } else {
      if (flag) setToDate(newValue?.toDate()!);
      else displayPopUp(alertMessage);
    }
  };

  const { loading, error, data } = useQuery<CompaniesEnrolledType>(
    CompaniesEnrolledQuery,
    {
      variables: {
        FromDate: fromDate,
        ToDate: toDate,
      },
    }
  );

  const SubmitClick = () => {
    dispatch(settingfromdate(fromDate.toLocaleDateString()!));
    dispatch(settingtodate(toDate.toLocaleDateString()!));
    const res: CompaniesEnrolledDTO[] = data?.getCompaniesEnrolled!;
    dispatch(fetchCompaniesEnrolledData(res));
  };

  const fromDateFromRedux = useAppSelector(getFromDate);
  const toDateFromRedux = useAppSelector(getToDate);
  const companyInfo = useAppSelector(getCompanyInfo);

  const fromFinal = DateTypeCast(fromDateFromRedux);
  const toFinal = DateTypeCast(toDateFromRedux);
  const enrollments = getFrequency(companyInfo);
  const days = getDifferenceOfDays(fromFinal, toFinal);

  return (
    <StyledDateSelector>
      <StyledDateSelectionRange>
        <StyledDateRange>{newUser_datepickers_Title}</StyledDateRange>
        <StyledFromContainer>
          <StyledDatePicker>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                inputFormat="DD/MM/YYYY"
                label="From"
                views={["year", "month", "day"]}
                value={dayjs(fromDate)}
                onChange={(newValue) => handleOnChange(newValue, true)}
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
                value={dayjs(toDate)}
                onChange={(newValue) => handleOnChange(newValue, false)}
                renderInput={(params: any) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </StyledDatePicker>
        </StyledToContainer>
        <StyledSubmitBtn>
          <ContainedButton onClick={SubmitClick}>SUBMIT</ContainedButton>
        </StyledSubmitBtn>
      </StyledDateSelectionRange>
      <StyledTableBody>
        <StyledTitle>Company Enrollments</StyledTitle>
        <StyledTableContainer>
          <Table aria-label="customized table">
            <TableBody>
              <TableRow>
                <TableCell>From Date</TableCell>
                <TableCell align="left">
                  {DateTypeCast(fromDateFromRedux).toDateString()}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>To Date</TableCell>
                <TableCell align="left">
                  {DateTypeCast(toDateFromRedux).toDateString()}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>No. Of Days</TableCell>
                <TableCell align="left">{days}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Enrollments</TableCell>
                <TableCell align="left">{enrollments}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </StyledTableContainer>
      </StyledTableBody>
    </StyledDateSelector>
  );
}
