import { Container, TextField } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useState } from 'react'
import { ContainedButton } from '../../../components/ConatinedButton'
import StepperBox from '../../../components/StepperBox'
import { Datepicker, Datepickercomponent, InactiveUsertablecontainer, Stepper, Submitbutton } from '../styledComponents'
import dayjs, { Dayjs } from 'dayjs'
import { useAppDispatch, useAppSelector } from '../../../shared/utils/redux/hooks'
import { settingDate } from '../reducer'
import InactiveTable from '../../../components/Table'
import { steps } from '../../../components/StepperBox/messages'
import NewTable from '../../../components/Table'


export default function ConsolidatedData() {
    const [Val, SetVal] = useState(dayjs().subtract(30, "day").toString());
    const data = useAppSelector((state)=>state.InactiveUsers.inactiveUsers);

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
                                value={Val}
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
                    <StepperBox steps={steps} />
                    </Stepper>                    
                </Container>
            </Datepickercomponent>
            <InactiveUsertablecontainer>
                <InactiveTable/>
            </InactiveUsertablecontainer>
        </div>
    )
}
