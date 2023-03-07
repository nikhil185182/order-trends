import React, { useRef, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Bar, Line } from 'react-chartjs-2';
import { useAppSelector } from '../../shared/utils/redux/Selectors/hooks';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ChartData, ChartEvent, ActiveElement } from 'chart.js';
import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import { getInactiveUsersData } from '../../shared/dto/orderTrendDto';

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
    const requestSearch = (searchedVal: string) => {
        const filteredRows = Ddata.filter((row) => {
            return row.CompanyName.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };
    const [listofcompanies, setlistofcompanies] = useState<getInactiveUsersData[]>(
        []
    );
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
    if (Ddata.length > 0) {
        data.push({ Days: inputDays, Value: Ddata.length, });
        data.sort((a, b) => b.Days - a.Days);
        console.log(data);
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
        },
        onClick: (event: ChartEvent, chartelement: ActiveElement[]) => {
            if (chartelement.length == 1) {
                console.log("bar is clicked")
                console.log(chartelement[0].index)
                if (data[chartelement[0].index].Days == 120) {
                    // Setgdata(data120);
                    // HandleChartBarClick()
                    const companyInfo = data120.map(item => `ComapnyName:${item.CompanyName}:LastOrder Date:${item.LatestOrderDate.toString().slice(0, 10)}`);
                    // console.log(companyInfo);
                    setOpen(true)
                    setIsDrawerOpen(true);
                    setlistofcompanies(data120);
                }
                else if (data[chartelement[0].index].Days == 90) {
                    const companyInfo = data90.map(item => `${item.CompanyName} - ${item.LatestOrderDate.toString().slice(0, 10)}`);
                    console.log(companyInfo);
                    setOpen(true)
                    setIsDrawerOpen(true);
                    setlistofcompanies(data90);
                }
                else if (data[chartelement[0].index].Days == 60) {
                    const companyInfo = data60.map(item => `${item.CompanyName} - ${item.LatestOrderDate.toString().slice(0, 10)}`);
                    console.log(companyInfo);
                    setOpen(true)
                    setIsDrawerOpen(true);
                    setlistofcompanies(data60);
                }
                else if (data[chartelement[0].index].Days == 30) {
                    const companyInfo = data30.map(item => `${item.CompanyName} - ${item.LatestOrderDate.toString().slice(0, 10)}`);
                    console.log(companyInfo);
                    setOpen(true)
                    setIsDrawerOpen(true);
                    setlistofcompanies(data30);
                }
                else {
                    const companyInfo = Ddata.map(item => `${item.CompanyName} - ${item.LatestOrderDate.toString().slice(0, 10)}`);
                    console.log(companyInfo);
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
                {/* <FormLabel id="demo-radio-buttons-group-label">Graph Type :</FormLabel> */}
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group" className='radio_group' row>
                    <FormControlLabel value="female" control={<Radio onClick={handleLineClick} checked={!IsBar} />} label="Line Chart" />
                    <FormControlLabel value="male" control={<Radio onClick={handleBarClick} checked={IsBar} />} label="Bar Chart" />
                </RadioGroup></FormControl>
            <Main open={true}>
                <Drawer className='drawer'
                    sx={{
                        width: drawerWidth,
                        flexShrink: 100,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                        },
                    }}
                    variant="persistent"
                    anchor="right"
                    open={open}
                >
                    <IconButton onClick={() => setOpen(false)}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>

                    <Divider />
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Company Name</TableCell>
                                    <TableCell>Latest Order Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listofcompanies?.map((company, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <AddBusinessOutlinedIcon style={{ fill: '#0072ea' }} />
                                            <ListItemText
                                                primaryTypographyProps={{ paddingLeft: 1, fontSize: '19px', fontFamily: 'helvetica-nueue' }}
                                                primary={company.CompanyName}
                                            />
                                        </TableCell>
                                        <TableCell>{company.LatestOrderDate.toString().slice(0,10)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Drawer>

            </Main>
        </div>
    )
}



export default InactiveChartdisplay;
