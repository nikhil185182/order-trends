import React, { useEffect, useRef, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material/ListItemText';
import { Bar, Line } from 'react-chartjs-2';
//import { useAppSelector } from '../../shared/utils/redux/Selectors/hooks';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ChartData, ChartEvent, ActiveElement } from 'chart.js';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';

import { getInactiveUsersData } from '../../shared/dto/InactiveUsersDTO';
import { useAppSelector } from '../../shared/utils/redux/selectors/hooks';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);



const Main = styled("main",
    { shouldForwardProp: (prop) => prop !== "open" })<
        { open?: boolean; }>(({ theme, open }) =>
        ({
            flexGrow: 1, transition: theme.transitions.create("margin",
                {
                    easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen,
                }), marginRight: -drawerWidth, ...(open && {
                    transition: theme.transitions.create("margin",
                        { easing: theme.transitions.easing.easeOut, duration: theme.transitions.duration.enteringScreen, }),
                    marginRight: 0,
                }),
        }));

const drawerWidth = 500;

const InactiveChartdisplay = () => {
    const [IsBar, SetBar] = useState(true);
    const theme = useTheme();
    const [IsDrawerOpen, setIsDrawerOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [open, setOpen] = useState(false);
    const handleBarClick = () => SetBar(true);
    const handleLineClick = () => SetBar(false);
    const data30 = useAppSelector((state) => state.InactiveUsers.inactiveUsers30);
    const data60 = useAppSelector((state) => state.InactiveUsers.inactiveUsers60);
    const data90 = useAppSelector((state) => state.InactiveUsers.inactiveUsers90);
    const data120 = useAppSelector((state) => state.InactiveUsers.inactiveUsers120);
    const Ddata = useAppSelector((state) => state.InactiveUsers.inactiveUsers);
    const inputDays = useAppSelector(state => state.InactiveUsers.Days);
    const [rows, setRows] = useState<getInactiveUsersData[]>(Ddata);
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
    const [listofcompanies, setlistofcompanies] = useState<getInactiveUsersData[]>([]);

    useEffect(() => {
        const filteredCompanies = Ddata.filter((company) =>
            company.CompanyName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setlistofcompanies(filteredCompanies);
    }, [Ddata, searchTerm]);

    const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    const data = [
        {
            Days: 120,
            Value: data120.length,
        },
        {
            Days: 90,
            Value: data90.length,
        },
        {
            Days: 60,
         
             Value: data60.length,
        },
        {
            Days: 30,
            Value: data30.length,
        }
    ]
    data.map((val)=>{
        console.log(val.Days);
        console.log('===');
        console.log(val.Value);
    })
    if (Ddata.length > 0) {
        data.push({Days:inputDays,Value:Ddata.length})
        // data.push({ Days: inputDays, Value: Ddata.length, });
        data.sort((a, b) => b.Days - a.Days);
    
    }

    const labels = data.map((item) => item.Days);
    const graphData = {
        labels,
        datasets: [
            {
                label: "Companies",
                data: data.map((item) => item.Value),
                borderColor: '#55B74E',
                backgroundColor: ['#55B74E']
            }
        ]
    };

    graphData.datasets[0].backgroundColor = labels.map((days) => {
        if (days === 30 || days === 60 || days === 90 || days === 120) {
            return "#55B74E";
        } else {
            return "orange";
        }
    });
    const GRAPH_OPTIONS = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Days"
                }
            },
            y: {
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Inactive Users"
                }
            }
        },
        plugins: {
            label: false,
            legend: {
                position: "top" as const,
            },
            title: {
                display: false,
                text: "Inactive Users",
                fontSize: 100,
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        console.log(context)
                        return [`Inactive Companies: ${context.raw}`, "Click to Get Companies Info"]
                    }
                }
            }
        },
        onClick: (event: ChartEvent, chartelement: ActiveElement[]) => {
            if (chartelement.length == 1) {
                console.log("bar is clicked")
                console.log(chartelement[0].index)
                if (data[chartelement[0].index].Days == 120) {
                    setOpen(true)
                    setIsDrawerOpen(true);
                    setlistofcompanies(data120);
                }
                else if (data[chartelement[0].index].Days == 90) {
                    setOpen(true)
                    setIsDrawerOpen(true);
                    setlistofcompanies(data90);
                }
                else if (data[chartelement[0].index].Days == 60) {
                    setOpen(true)
                    setIsDrawerOpen(true);
                    setlistofcompanies(data60);
                }
                else if (data[chartelement[0].index].Days == 30) {
                    setOpen(true)
                    setIsDrawerOpen(true);
                    setlistofcompanies(data30);
                }
                else {
                    setOpen(true)
                    setIsDrawerOpen(true);
                    setlistofcompanies(Ddata);
                }

            }
        }

    };


    return (
        <div>
            {IsBar ? <Bar options={GRAPH_OPTIONS} data={graphData} /> : <Line options={GRAPH_OPTIONS} data={graphData} />}
            <FormControl className='dummy'>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"  row style={{marginLeft:400}} >
                    <FormControlLabel value="female" control={<Radio onClick={handleLineClick} sx={{
                        '&, &.Mui-checked': {
                            color: '#55B74E',
                        },
                    }}
                        checked={!IsBar} />} label="Line Chart" />
                    <FormControlLabel value="male" control={<Radio onClick={handleBarClick} sx={{
                        '&, &.Mui-checked': {
                            color: '#55B74E',
                        },
                    }}
                        checked={IsBar} />} label="Bar Chart" />
                </RadioGroup></FormControl>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Company Name-Latest Order Date(YYYY-MM-DD)</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <TextField
                        label="Search Inactive Users"
                        variant="outlined"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        sx={{
                            width: 600,
                        }}
                    >
                        {listofcompanies?.map((company, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <ListItemText
                                        primaryTypographyProps={{ paddingLeft: 1, fontSize: '19px', fontFamily: 'helvetica-nueue' }}
                                        primary={company.CompanyName}
                                    />
                                </TableCell>
                                <TableCell>{company.LatestOrderDate.toString().slice(0, 10)}</TableCell>
                            </TableRow>
                        ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}



export default InactiveChartdisplay;
