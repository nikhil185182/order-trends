import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, Paper, Typography, MobileStepper, Button, useTheme } from '@mui/material'
import React from 'react'
import { Direction } from '../../containers/InactiveCompanies/ConsolidatedData/StyledComponents';



export default function StepperBox(props:any) {
    const { steps } = props;
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;
    const theme = useTheme();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <Direction>
            <Box sx={{ width: 270, flexGrow: 1, marginTop: 8 }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        height: 50,
                        pl: 2,
                        bgcolor: "background.default",
                    }}
                >
                    <Typography>{steps[activeStep].label}</Typography>
                </Paper>
                <Box sx={{ height: 180, maxWidth: 600, width: "100%", p: 2 }}>
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
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                        >
                            {theme.direction === "rtl" ? (
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
    )
}
