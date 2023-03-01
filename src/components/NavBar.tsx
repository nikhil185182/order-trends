import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import { ORDER_TREND, COMPANY_TREND, NEW_USER, INACTIVE_USER } from '../shared/global_constants';
import '../shared/css/NavBar.css';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material';

export default function NavBar() {
    let navigate = useNavigate();
    return (
        <AppBar position="static" style={{ background: '#54B948',margin:'0px'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=>navigate('/')}>
                    Ecommerce Analytics
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit' onClick={()=>navigate('/ordertrend')}>{ORDER_TREND}</Button>
                    <Button color='inherit'>{COMPANY_TREND}</Button>
                    <Button color='inherit'>{NEW_USER}</Button>
                    <Button color='inherit'>{INACTIVE_USER}</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
