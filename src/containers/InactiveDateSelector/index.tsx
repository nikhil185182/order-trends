import { Box, Button, MobileStepper, Paper, TextField, Typography, useTheme } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import {  settingDate } from '../InactiveCompanies/reducer';
import { useAppDispatch} from '../../shared/utils/redux/hooks';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Container, Datepicker, Direction, Submitbutton } from '../InactiveCompanies/styledComponents';

const steps = [
    {
        label: 'Select required date on the Date Picker',
        description: `Select Required date in the date picker and click the
        submit button below it.`,
    },
    {
        label: 'View the List of Inactive Users on Table',
        description:`The Table displays the number of 
        inactive users since the last 60 days from the selected date.`,
    },
];

function DateandDaysSelector() {
    const [Val, SetVal] = useState("");
    const [value, setValue] = useState<Dayjs | null>(dayjs().subtract(30, 'day'));
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const dispatch = useAppDispatch();
  

    return (
        
                    <>  
                    <Container>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Datepicker>
                            <DatePicker onYearChange={undefined}
                                value={value}
                                label="Select a Date"
                                onChange={(newValue) => {
                                    setValue(newValue);
                                    const monthVal: number = newValue?.get('month')! + 1;
                                    const mVal: string = monthVal < 10 ? '0' + monthVal : monthVal.toString();
                                    var val: string = newValue?.get('year').toString()! + '-' + mVal + '-' + newValue?.get('date').toString()!;
                                    console.log(val);
                                    SetVal(val);
                                }}
                                views={['year', 'month', 'day']}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Datepicker>
                        </LocalizationProvider>
                        
                        <Submitbutton>
                        <Button
                            variant="contained"
                            onClick={() => {
                                dispatch(settingDate(Val));
                                console.log("action dispatched");
                            }}
                            style={{backgroundColor: '#55B74E'}}
                        >
                        Submit
                        </Button>
                        </Submitbutton>

                        <Direction>
                            <Box sx={{ width: 270, flexGrow: 1, marginTop: 8 }}>
                                <Paper
                                    square
                                    elevation={0}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: 50,
                                        pl: 2,
                                        bgcolor: 'background.default',
                                    }}
                                >
                                    <Typography>{steps[activeStep].label}</Typography>
                                </Paper>
                                <Box sx={{ height: 180, maxWidth: 600, width: '100%', p: 2 }}>
                                    {steps[activeStep].description}
                                </Box>
                                <MobileStepper
                                    variant="text"
                                    steps={maxSteps}
                                    position="static"
                                    activeStep={activeStep}
                                    nextButton={
                                        <Button
                                            size="small"
                                            onClick={handleNext}
                                            disabled={activeStep === maxSteps - 1}
                                        >
                                            Next
                                            {theme.direction === 'rtl' ? (
                                                <KeyboardArrowLeft />
                                            ) : (
                                                <KeyboardArrowRight />
                                            )}
                                        </Button>
                                    }
                                    backButton={
                                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                            {theme.direction === 'rtl' ? (
                                                <KeyboardArrowRight />
                                            ) : (
                                                <KeyboardArrowLeft />
                                            )}
                                            Back
                                        </Button>
                                    }
                                />
                            </Box>
                        </Direction>
                    </Container>
                    </>
                

    )
}

export default DateandDaysSelector;
