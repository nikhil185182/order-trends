import { Container, TextField } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useState } from 'react'
import { ContainedButton } from '../../../components/ConatinedButton'
import StepperBox from '../../../components/StepperBox'
import dayjs, { Dayjs } from 'dayjs'
import { useAppDispatch } from '../../../shared/utils/redux/hooks'
import { settingDate } from '../reducer'
import InactiveTable from '../../../components/Table'
import { steps } from '../../../components/StepperBox/messages'
import { Datepickercomponent, Datepicker, Submitbutton, InactiveUsertablecontainer, Stepper } from './StyledComponents'
import { DateToStringFormat } from '../utils'


export default function ConsolidatedData() {
    const dispatch = useAppDispatch();

    const [Val, SetVal] = useState(dayjs().subtract(30, "day").toString());

    const handleOnChange = (newValue: Dayjs | null) => SetVal(DateToStringFormat(newValue));
    const handleClick = () => dispatch(settingDate(Val));

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
                <InactiveTable />
            </InactiveUsertablecontainer>
        </div>
    )
}
