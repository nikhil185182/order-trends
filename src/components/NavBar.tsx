import { Stack, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ORDER_TREND, COMPANY_TREND, NEW_USER, INACTIVE_USER } from '../shared/global_constants';
import '../shared/css/NavBar.css';
import { useNavigate } from 'react-router-dom';
import DrawerComp from './DrawerComp';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';


export default function NavBar() {
    let navigate = useNavigate();

    const theme = useTheme();
    console.log(theme);

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);

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
                        <Button color='inherit' onClick={() => navigate('/ordertrend')}>{ORDER_TREND}</Button>
                        <Button color='inherit' onClick={()=>navigate('/companytrend')} >{COMPANY_TREND}</Button>
                        <Button color='inherit' onClick={() => navigate('/newUsers')} >{NEW_USER}</Button>
                        <Button color='inherit' onClick={() => navigate('/inactiveUsers')}>{INACTIVE_USER}</Button>
                    </div>}
            </Toolbar>
        </AppBar>
    )
}