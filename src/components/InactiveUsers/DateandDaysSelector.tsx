import { Box, Button, Chip, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../shared/css/inactive.css';
import { getInactiveUsersData } from '../../shared/dto/orderTrendDto';
import { DataFromGraphql } from '../../shared/utils/Graphql/gqlHelper';
import { addingInactiveUsersdata, settingDays } from '../../shared/utils/redux/reducers/InactiveUsersReducer';
import { useAppDispatch } from '../../shared/utils/redux/Selectors/hooks';



function Daysdifference(pastDate: string): number {
    const oneDayInMs = 24 * 60 * 60 * 1000;
    const today = new Date();
    const past = new Date(pastDate);
    const diffInDays = Math.round(Math.abs((today.getTime() - past.getTime()) / oneDayInMs));
    return diffInDays;
}

const pastDate = "2023-02-01";
const daysDiff = Daysdifference(pastDate);

console.log(`The number of days between ${pastDate} and today is ${daysDiff} days.`);


function DateandDaysSelector() {
    const [IsDate, SetDate] = useState(true);
    const [Day, setDay] = React.useState(0);
    const handleDayClick = () => SetDate(false);
    const handleDateClick = () => SetDate(true);
    const [value, setValue] = useState<Dayjs | null>(dayjs());
    const [dateList, SetDateList] = useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent) => {
        setDay(event.target.value as unknown as number);
    }

    const dispatch = useAppDispatch();

    return (
        <div>
            <div>
                <Button className='Day_picker_btn' onClick={handleDayClick} variant="outlined">Day-Picker</Button>
                <Button className='Date_picker_btn' onClick={handleDateClick} variant="outlined">Date-Picker</Button>
                {IsDate ?
                    <>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker onYearChange={undefined} className='Date_picker'
                                value={value}
                                label="From Date"
                                onChange={(newValue) => {
                                    setValue(newValue);
                                    const monthVal: number = newValue?.get('month')! + 1;
                                    const mVal: string = monthVal < 10 ? '0' + monthVal : monthVal.toString();
                                    const val: string = newValue?.get('year').toString()! + '-' + mVal + '-' + newValue?.get('date').toString()!;
                                    var days = Daysdifference(val);
                                    setDay(days);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <div className="dateListbox">
                            {
                                dateList.map((e) => {
                                    return (
                                        <div>
                                            <Chip
                                                variant="outlined"
                                                className='chip_component'
                                                label={e}
                                                onDelete={() => SetDateList(dateList.filter(item => item != e))}
                                                deleteIcon={<DeleteIcon />}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <Button
                            variant="outlined"
                            style={{ position: 'absolute', bottom: 100, left: 150 }}
                            onClick={() => {
                                dispatch(settingDays(Day));
                                console.log("action dispatched");
                            }}
                        >
                            Submit
                        </Button>
                    </> :
                    <div className='Day_picker'>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Days</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Days"
                                    onChange={handleChange}
                                >
                                    <MenuItem onClick={() => {
                                        dispatch(settingDays(180));
                                        console.log("action dispatched");
                                    }} value={180}>180</MenuItem>
                                    <MenuItem onClick={() => {
                                        dispatch(settingDays(240));
                                        console.log("action dispatched");
                                    }} value={240}>240</MenuItem>
                                    <MenuItem onClick={() => {
                                        dispatch(settingDays(365));
                                        console.log("action dispatched");
                                    }} value={365}>365</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                }

            </div>
        </div>
    )
}

export default DateandDaysSelector;
