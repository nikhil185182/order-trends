import { Container, TextField } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useState } from 'react'
import { ContainedButton } from '../../../components/ConatinedButton'
import StepperBox from '../../../components/StepperBox'
import { Datepicker, Datepickercomponent, InactiveUsertablecontainer, Stepper, Submitbutton } from '../styledComponents'
import dayjs, { Dayjs } from 'dayjs'
import { useAppDispatch } from '../../../shared/utils/redux/hooks'
import { settingDate } from '../reducer'
import InactiveTable from '../../../components/Table'


export default function ConsolidatedData() {
    const [Val, SetVal] = useState("");
    const value = dayjs().subtract(30, "day");

    const dispatch = useAppDispatch();

    const handleOnChange = (newValue: Dayjs | null) => {
        const monthVal: number = newValue?.get('month')! + 1;
        const mVal: string = monthVal < 10 ? '0' + monthVal : monthVal.toString();
        var val: string = newValue?.get('year').toString()! + '-' + mVal + '-' + newValue?.get('date').toString()!;
        console.log(val);
        SetVal(val);
    }

    const handleClick = () => {
        dispatch(settingDate(Val));
    }
    return (
        <div>
            <Datepickercomponent>
                <Container>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Datepicker>
                            <DatePicker onYearChange={undefined}
                                value={value}
                                label="Select a Date"
                                onChange={handleOnChange}
                                views={['year', 'month', 'day']}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Datepicker>
                    </LocalizationProvider>
                    <Submitbutton>
                        <ContainedButton onClick={handleClick}>
                            SUBMIT
                        </ContainedButton>
                    </Submitbutton>
                    <Stepper>
                    <StepperBox />
                    </Stepper>                    
                </Container>
            </Datepickercomponent>
            <InactiveUsertablecontainer>
                <InactiveTable/>
            </InactiveUsertablecontainer>
        </div>
    )
}
