import { Stack ,AppBar,Toolbar,Typography,Button} from '@mui/material';
import { ORDER_TREND, COMPANY_TREND, NEW_USER, INACTIVE_USER } from '../shared/global_constants';
import '../shared/css/NavBar.css';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    let navigate = useNavigate();
    return (
        <AppBar position="static" style={{ background: '#54B948'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=>navigate('/')}>
                    e-Commerce Analytics
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit' onClick={()=>navigate('/ordertrend')}>{ORDER_TREND}</Button>
                    <Button color='inherit' onClick={()=>navigate('/companylevel')} >{COMPANY_TREND}</Button>
                    <Button color='inherit' onClick={()=>navigate('/newUsers')} >{NEW_USER}</Button>
                    <Button color='inherit'  onClick={()=>navigate('/inactiveUsers')}>{INACTIVE_USER}</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
