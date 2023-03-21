import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton, List, ListItemButton } from '@mui/material';
import { COMPANY_TREND, INACTIVE_USER, NEW_USER, ORDER_TREND } from '../shared/global_constants';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false);
    let navigate = useNavigate();

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
        setOpenDrawer(!openDrawer);
    }

    const s1 = { border: tab[0]? '1px solid green' : '', color:'green',margin:'1px'};
    const s2 = { border: tab[1]? '1px solid green' : '', color:'green',margin:'1px' };
    const s3 = { border: tab[2]? '1px solid green' : '', color:'green',margin:'1px' };
    const s4 = { border: tab[3]? '1px solid green' : '', color:'green',margin:'1px' };

    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor='right'>
                <List style={{fontFamily:'roboto'}}>
                    <ListItemButton sx={s1} onClick={handleClick(1)}>{ORDER_TREND}</ListItemButton>
                    <ListItemButton sx={s2} onClick={handleClick(2)}>{COMPANY_TREND}</ListItemButton>
                    <ListItemButton sx={s3} onClick={handleClick(3)}>{NEW_USER}</ListItemButton>
                    <ListItemButton sx={s4} onClick={handleClick(4)}>{INACTIVE_USER}</ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}
