import { TextField } from '@mui/material'
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import React, { useEffect, useState } from 'react'
import { OrderTrendDto, gType } from '../shared/dto/orderTrendDto';
import DeleteIcon from '@mui/icons-material/Delete';
import { GRAPH_DUMMY_DATA } from '../shared/global_constants'
import { addOrderDateList } from '../redux/reducers/orderTrendReducer'
import { getDateFromDatePicker, getMaximumDateData } from '../shared/utils/helperFunctions'
import { useAppDispatch } from '../redux/selectors/hooks'


export default function CompareDatePicker(props: { orderMap: Map<string, OrderTrendDto> }) {

    const dispatch = useAppDispatch();

    const minimumDate = Array.from(props.orderMap)[0][0];
    const maximumDate = Array.from(props.orderMap)[props.orderMap.size - 1][0];

    const temp_Obj: OrderTrendDto = getMaximumDateData(maximumDate, props.orderMap);

    const [value, setValue] = useState<Dayjs | null>(dayjs(maximumDate));
    const [dateList, SetDateList] = useState<(OrderTrendDto)[]>([temp_Obj]);


    const handleDelete = (e: OrderTrendDto) => SetDateList(dateList.filter((item: OrderTrendDto) => item != e));
    

    useEffect(()=>{
        dispatch(addOrderDateList({orderDateList:dateList}));
    },[dateList]);

    const HandleOnAccept = (newValue: Dayjs | null) => {
        setValue(newValue);
        const val = getDateFromDatePicker(newValue);
        if (props.orderMap.has(val)) {
            if (!dateList.includes(props.orderMap.get(val)!)){
                SetDateList([...dateList, props.orderMap.get(val)!]);
            }
            else{
                alert("Date already exists in Data");
            }
        }
        else {
            alert('Date not found');
        }
        console.log(dateList);
    }

  return (
    <div className="compare_bar">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker onYearChange={undefined}
                        value={value}
                        maxDate={dayjs(maximumDate)}
                        minDate={dayjs(minimumDate)}
                        onChange={() => true}
                        onAccept={HandleOnAccept}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <div className="dateListbox">
                    {
                        dateList.map((e: OrderTrendDto) => {
                            return (
                                <div className="chipObject">
                                    <p>{e.OrderDate}</p>
                                    <p onClick={() => handleDelete(e)}><DeleteIcon fontSize='small' /></p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
  )
}
