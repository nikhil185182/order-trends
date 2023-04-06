import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import React from 'react';
import { useEffect, useState } from 'react'

import { setLabel } from '../CompanyOrderTrend/reducer';
import { useAppDispatch } from '../../shared/utils/redux/selectors/hooks';



const CompanyRadioButtonContainer = () => {

  
    const dispatch = useAppDispatch()
    const [value, setValue] =useState('Total Orders');
    const width = window.innerWidth;
   
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    }
    useEffect(()=>{
      dispatch(setLabel(value));
    },[value])
    useEffect(()=>{
      
    },[width])
  return (
    (width>440)?
<FormControl className='fc-rb'>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value="Total Orders"  checked={value=="Total Orders"} control={<Radio style={{ color: "#54B948" }} />} label="Total Orders" />
        <FormControlLabel value="Completed Orders" checked={value=="Completed Orders"} control={<Radio style={{ color: "#54B948" }}/>} label="Completed Orders" />
        <FormControlLabel value="Attempted Orders" checked={value=="Attempted Orders"} control={<Radio style={{ color: "#54B948" }}/>} label="Attempted Orders" />
      </RadioGroup>
    </FormControl>
    :
    <FormControl className='fc-rb'>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
        color="green"
      >
        <FormControlLabel value="Total Orders"  checked={value=="Total Orders"} control={<Radio style={{ color: "#54B948" }}/>} label="Total Orders" />
        <FormControlLabel value="Completed Orders" checked={value=="Completed Orders"} control={<Radio style={{ color: "#54B948" }}/>} label="Completed Orders" />
        <FormControlLabel value="Attempted Orders" checked={value=="Attempted Orders"} control={<Radio style={{ color: "#54B948" }}/>} label="Attempted Orders" />
      </RadioGroup>
    </FormControl>

  
  )
}

export default CompanyRadioButtonContainer
