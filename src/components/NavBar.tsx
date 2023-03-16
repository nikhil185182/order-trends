import { Stack, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ORDER_TREND, COMPANY_TREND, NEW_USER, INACTIVE_USER } from '../shared/global_constants';
import '../shared/css/NavBar.css';
import { useNavigate } from 'react-router-dom';
import DrawerComp from './DrawerComp';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';
import React, { useState } from 'react';

export default function NavBar() {
    let navigate = useNavigate();

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const [tab,SetTab] = useState([true,false,false,false]);

    const handleClick = (x: number) => () => {
        tab.fill(false);
        tab[x-1]=true;
        switch (x) {
            case 1: 
                navigate('/');
                break;
            case 2:
                navigate('/companytrend');
                break;
            case 3:
                navigate('/newUsers');
                break;
            case 4:
                navigate('/inactiveUsers');
                break;
        }
        SetTab(tab);
    }

    return (
        <AppBar style={{ background: '#54B948' }}>
            <Toolbar>
                <Typography>
                    e-Commerce Analytics
                </Typography>
                {isMatch ? (
                    <div className="drawer_comp" style={{ marginLeft: 'none' }}>
                        <DrawerComp />
                    </div>
                ) :
                    <div className="btn_cls" style={{ marginLeft: 'auto' }}>
                        <Button sx={{ border: tab[0]? '1px solid white' : '', color: 'white' }} onClick={handleClick(1)}>{ORDER_TREND}</Button>
                        <Button sx={{ border: tab[1]? '1px solid white' : '', color: 'white' }} onClick={handleClick(2)} >{COMPANY_TREND}</Button>
                        <Button sx={{ border: tab[2]? '1px solid white' : '', color: 'white' }} onClick={handleClick(3)} >{NEW_USER}</Button>
                        <Button sx={{ border: tab[3]? '1px solid white' : '', color: 'white' }} onClick={handleClick(4)}>{INACTIVE_USER}</Button>
                    </div>}
            </Toolbar>
        </AppBar>
    )
}
