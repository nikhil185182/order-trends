import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import { GREEN } from '../../shared/global_constants';

export const OutlinedButton = styled(Button)({
    color:GREEN,
    border : '1px solid '+GREEN,
    textTransform : 'none',
    width : '100px'
})