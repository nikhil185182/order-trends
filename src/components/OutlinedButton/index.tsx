import {styled} from '@mui/material/styles';
import {Button} from '@mui/material';
import { GREEN } from '../../shared/global_constants';

export const OutlinedButton = styled(Button)({
    color:GREEN,
    border : '1px solid '+GREEN,
    textTransform : 'none',
})