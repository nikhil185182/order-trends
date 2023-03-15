import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { useEffect, useState } from 'react'
import { setLabel } from '../../shared/utils/redux/reducers/companyReducer';
import { useAppDispatch } from '../../shared/utils/redux/selectors/hooks';


const CompanyRadioButtonContainer = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] =useState('Total Orders');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    }
    useEffect(()=>{
      dispatch(setLabel(value));
    },[value])
  return (
<FormControl className='fc-rb'>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
        color="green"
      >
        <FormControlLabel value="Total Orders"  checked={value==="Total Orders"} control={<Radio />} label="Total Orders" />
        <FormControlLabel value="Completed Orders" checked={value==="Completed Orders"} control={<Radio />} label="Completed Orders" />
        <FormControlLabel value="Attempted Orders" checked={value==="Attempted Orders"} control={<Radio />} label="Attempted Orders" />
      </RadioGroup>
    </FormControl>
  )
}

export default CompanyRadioButtonContainer
