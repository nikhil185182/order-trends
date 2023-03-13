import { useEffect, useState } from 'react'
import { OrderTrendDto } from '../shared/dto/orderTrendDto';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import '../shared/css/NavBar.css';



const Compare = (props: { orderMap: Map<String, OrderTrendDto> }) => {
    const [value, setValue] = useState<Dayjs | null>(null);
    const [dateList, SetDateList] = useState<(OrderTrendDto)[]>([]);
    
    const handleDelete = (e: OrderTrendDto) => {
        SetDateList(dateList.filter(item => item != e));
    }

    useEffect(()=>{
    },[dateList]);
    return (
        <div className="compareTab">

            <div className="stats_bar">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker onYearChange={undefined} className="sha"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                            const monthVal : number = newValue?.get('month')! + 1;
                            const mVal : string = monthVal<10?'0'+monthVal:monthVal.toString();
                            const val: string = newValue?.get('year').toString()! + '-' + mVal + '-' + newValue?.get('date').toString()!;
                            if(props.orderMap.has(val))
                                SetDateList([...dateList, props.orderMap.get(val)!]);
                            else
                                alert('Date not found');
                            setValue(null);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <div className="dateListbox">
                    {
                        dateList.map((e: OrderTrendDto) => {
                            return (
                                <div className="chipObject">
                                    <p>{e.OrderDate}</p>
                                    <p onClick={() => handleDelete(e)}>x</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
                {/* <Bar options={GRAPH_OPTIONS} data={graphData}/> */}
        </div>
    )
}

export default Compare;
