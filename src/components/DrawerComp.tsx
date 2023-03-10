import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton, List, ListItemButton } from '@mui/material';
import { COMPANY_TREND, INACTIVE_USER, NEW_USER, ORDER_TREND } from '../shared/global_constants';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false);
    let navigate = useNavigate();

    const handleOrderTrendClick = ()=>{
        navigate('/ordertrend');
        setOpenDrawer(!openDrawer);
    }

    const handleNewUserClick = ()=>{
        setOpenDrawer(!openDrawer);
        navigate('/newUsers');
    }

    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItemButton onClick={handleOrderTrendClick}>{ORDER_TREND}</ListItemButton>
                    <ListItemButton>{COMPANY_TREND}</ListItemButton>
                    <ListItemButton onClick={handleNewUserClick}>{NEW_USER}</ListItemButton>
                    <ListItemButton>{INACTIVE_USER}</ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}
