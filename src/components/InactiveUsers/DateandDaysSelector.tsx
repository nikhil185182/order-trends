import { Box, Button, Chip, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, styled, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Tooltip, tooltipClasses, TooltipProps, Typography } from '@mui/material';
import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../shared/css/inactive.css';
import { getInactiveUsersData } from '../../shared/dto/orderTrendDto';
import { DataFromGraphql } from '../../shared/utils/Graphql/gqlHelper';
import { addingInactiveUsersdata, settingDays } from '../../shared/utils/redux/reducers/InactiveUsersReducer';
import { useAppDispatch, useAppSelector } from '../../shared/utils/redux/Selectors/hooks';

const today1 = new Date();
const p = today1.toString();
const date = new Date(Date.parse(p));
const isoString = date.toISOString();
const formattedDate = isoString.slice(0, 10); 





function Daysdifference(pastDate: string): number {
    const oneDayInMs = 24 * 60 * 60 * 1000;
    const today = new Date();
    const past = new Date(pastDate);
    const diffInDays = Math.round(Math.abs((today.getTime() - past.getTime()) / oneDayInMs));
    return diffInDays;
}

const SubmitTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  const DateTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

const pastDate = "2023-02-01";
const daysDiff = Daysdifference(pastDate);

console.log(`The number of days between ${pastDate} and today is ${daysDiff} days.`);


function DateandDaysSelector() {
    const [IsDate, SetDate] = useState(true);
    const [Day, setDay] = React.useState(15);
    const [Val, SetVal] = useState("");
    const handleDayClick = () => SetDate(false);
    const handleDateClick = () => SetDate(true);
    const [value, setValue] = useState<Dayjs | null>(dayjs().subtract(30, 'day'));
    const [dateList, SetDateList] = useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent) => {
        setDay(event.target.value as unknown as number);
    }

    const dispatch = useAppDispatch();
    const Ddata = useAppSelector((state) => state.InactiveUsers.inactiveUsers);

    return (
        <div>
            <div>
                {/* <Button className='Date_picker_btn' onClick={handleDateClick} variant="contained">Date-Picker</Button> */}
                {
                    <>  <div className='container'>
                        {/* <h5>{"Date Picker"}</h5> */}
                        <DateTooltip title="Add from Date">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker onYearChange={undefined} className='Date_picker'
                                value={value}
                                label="From Date"
                                onChange={(newValue) => {
                                    setValue(newValue);
                                    const monthVal: number = newValue?.get('month')! + 1;
                                    const mVal: string = monthVal < 10 ? '0' + monthVal : monthVal.toString();
                                    var val: string = newValue?.get('year').toString()! + '-' + mVal + '-' + newValue?.get('date').toString()!;
                                    var days = Daysdifference(val);
                                    setDay(days);
                                    SetVal(val);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        </DateTooltip>

                        <div>
                            <div className='Inactive_table' >
                                <Typography className='InactiveUsertable_container_title' ><b>Inactive Companies details</b></Typography>
                                <TableContainer component={Paper} className="InactiveUsertable_container">
                                    <Table aria-label="customized table"> <TableBody>
                                        <TableRow> <TableCell >From Date</TableCell>
                                            <TableCell align="left">{Val}</TableCell> </TableRow> <TableRow>
                                            <TableCell > To Date</TableCell><TableCell align="left">{formattedDate}</TableCell>
                                        </TableRow> <TableRow><TableCell >No. Of Days </TableCell>
                                            <TableCell align="left">{Day}</TableCell></TableRow><TableRow>
                                            <TableCell >Inactive Companies</TableCell>
                                            <TableCell align="left">{Ddata.length}</TableCell>
                                        </TableRow> </TableBody> </Table> </TableContainer></div>
                        </div>
                        </div>
                        <SubmitTooltip title="Add Clicked date">
                        <Button
                            variant="contained"
                            className='submit_btn'
                            // style={{ position: 'absolute', bottom: 300, left: 150 }}
                            onClick={() => {
                                dispatch(settingDays(Day));
                                console.log("action dispatched");
                            }}
                        >
                            Submit
                        </Button>
                        </SubmitTooltip>
                        
                    </>
                }

            </div>
        </div>
    )
}

export default DateandDaysSelector;
