import React from 'react';
import Statistics from '../Statistics';
import Compare from '../Compare';
import '../../shared/css/NavBar.css';
import { Box, Tab, Tabs, Typography } from '@mui/material';

import { fetchOrderTrenData } from '../../shared/utils/redux/reducers/orderTrendReducer';
import { useAppDispatch } from '../../shared/utils/redux/selectors/hooks';
import { OrderTrendBox } from './styledComponents';



const OrderTrend = () => {

    const dispatch = useAppDispatch();

    dispatch(fetchOrderTrenData());

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
                style={{ width: '100%', alignItems: 'center' }}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const [value, setValue] = React.useState(0);

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);


    return (
        <OrderTrendBox>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Statistics" {...a11yProps(0)} />
                    <Tab label="Compare" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
                <Statistics />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Compare />
            </TabPanel>
        </OrderTrendBox>
    )
}

export default OrderTrend;

