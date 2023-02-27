import { Delete } from '@mui/icons-material';
import {  Chip, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect } from 'react';
import  { useState } from 'react'
import { useAppDispatch } from '../shared/utils/redux/hooks';
import { setDateString } from '../shared/utils/redux/reducers/companyReducer';
const CompanyDatePicker = () => {
    const [value,setValue] = useState<Dayjs|null>(dayjs());
    const [dateList,SetDateList] = useState<string[]>([]);
    const dispatch = useAppDispatch();


    useEffect(()=>
    {
        dispatch(setDateString(dateList))
        console.log('====================================');
        console.log(dateList);
        console.log('====================================');
    },[dateList])

  return (
    <div className='datepickerComponent'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker onYearChange={undefined} className="sha"
            value={value}
            onChange={()=>true}
            onAccept={ (newValue) => {
                setValue(newValue);
                const monthVal : number = newValue?.get('month')! + 1;
                const mVal : string = monthVal<10?'0'+monthVal:monthVal.toString();
                const val: string = newValue?.get('year').toString()! + '-' + mVal + '-' + newValue?.get('date').toString()!;
                    SetDateList([...dateList,val]);
                setValue(null);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
    <div className="dateListbox">
        {
            dateList.map((e,index) => {
                return (
                    <>
                    <Chip
                    key={index}
                    label={e}
                    icon={<Delete/>}
                    variant="outlined"
                    onClick={() => SetDateList(dateList.filter(item => item != e))}
                  />
                  </>
                )
            })
        }
    </div>
</div>
  )
}

export default CompanyDatePicker
