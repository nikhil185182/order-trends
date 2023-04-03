import { Button, Chip, Snackbar, TextField } from '@mui/material'
import { LocalizationProvider, DesktopDatePicker, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import React, { useEffect, useState } from 'react';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { OrderTrendDto } from '../containers/orderTrend/orderTrendDto';
import { DATA_NOT_FOUND, DUPLICATE_DATA, GRAPH_DUMMY_DATA } from '../shared/global_constants';
import { addOrderDateList } from '../shared/utils/redux/reducers/orderTrendReducer'
import { getDateFromDatePicker } from '../shared/utils/helperFunctions'
import { useAppDispatch } from '../shared/utils/redux/selectors/hooks'
import { COMPARE_DATEPICKER, DATELIST_BOX } from '../shared/styledComponents/orderTrendComponents';


export default function CompareDatePicker(props: { orderMap: Map<string, OrderTrendDto> }) {

    const dispatch = useAppDispatch();

    const minimumDate = Array.from(props.orderMap)[0][0];
    const maximumDate = Array.from(props.orderMap)[props.orderMap.size - 1][0];

    const [value, setValue] = useState<Dayjs | null>(dayjs(maximumDate));
    const [dateList, SetDateList] = useState<(OrderTrendDto)[]>([props.orderMap.get(maximumDate)!]);

    const [consoleMessage,SetConsoleMessage] = useState("");
    const [consoleOpen,SetConsoleOpen] = useState(false);

    const handleDelete = (e: OrderTrendDto) => {
        SetDateList(dateList.filter((item: OrderTrendDto) => item != e));
    }

    useEffect(() => {
        dispatch(addOrderDateList({ orderDateList: dateList }));
    }, [dateList]);

    const HandleOnAccept = (newValue: Dayjs | null) => {
        setValue(newValue);
        const val = getDateFromDatePicker(newValue);
        if (props.orderMap.has(val)) {
            if (!dateList.includes(props.orderMap.get(val)!)) {
                SetDateList([...dateList, props.orderMap.get(val)!]);
            }
            else {
                SetConsoleMessage(DUPLICATE_DATA);
                SetConsoleOpen(true);
            }
        }
        else {
            SetConsoleMessage(DATA_NOT_FOUND);
            SetConsoleOpen(true);
        }
    }

    return (
        <COMPARE_DATEPICKER>
             <Snackbar
                anchorOrigin={{ vertical:'top', horizontal:'center' }}
                open={consoleOpen}
                onClose={()=>SetConsoleOpen(false)}
                message={consoleMessage}
                autoHideDuration={3000}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onYearChange={undefined}
                    label="Select date(s)"
                    value={value}
                    maxDate={dayjs(maximumDate)}
                    views={['year', 'month', 'day']}
                    minDate={dayjs(minimumDate)}
                    onChange={()=>true}
                    onAccept={HandleOnAccept}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <DATELIST_BOX>
                {
                    dateList.map((e: OrderTrendDto) => {
                        return (
                            <Chip style={{ position: "relative" }} className="chipObject" label={e.OrderDate}
                                icon={
                                    <HighlightOffTwoToneIcon
                                        style={{ position: "absolute", right: "10px" }}
                                        onClick={()=>handleDelete(e)}
                                    />
                            } variant='outlined'/>  
                        )
                    })
                }
            </DATELIST_BOX>
        </COMPARE_DATEPICKER>
    )
}

