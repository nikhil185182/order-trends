import { TextField } from '@mui/material'
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import React, { useEffect, useState } from 'react'
import { OrderTrendDto } from '../shared/dto/orderTrendDto';
import DeleteIcon from '@mui/icons-material/Delete';
import { DATA_NOT_FOUND, DUPLICATE_DATA, GRAPH_DUMMY_DATA } from '../shared/global_constants';
import { addOrderDateList } from '../shared/utils/redux/reducers/orderTrendReducer'
import { getDateFromDatePicker } from '../shared/utils/helperFunctions'
import { useAppDispatch } from '../shared/utils/redux/selectors/hooks'
import { COMPARE_DATEPICKER, DATELIST_BOX } from '../shared/styledComponents/orderTrendComponents'


export default function CompareDatePicker(props: { orderMap: Map<string, OrderTrendDto> }) {

    const dispatch = useAppDispatch();

    const minimumDate = Array.from(props.orderMap)[0][0];
    const maximumDate = Array.from(props.orderMap)[props.orderMap.size - 1][0];

    const [value, setValue] = useState<Dayjs | null>(dayjs(maximumDate));
    const [dateList, SetDateList] = useState<(OrderTrendDto)[]>([props.orderMap.get(maximumDate)!]);

    const handleDelete = (e: OrderTrendDto) => SetDateList(dateList.filter((item: OrderTrendDto) => item != e));

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
                alert(DUPLICATE_DATA);
            }
        }
        else {
            alert(DATA_NOT_FOUND);
        }
    }

    return (
        <COMPARE_DATEPICKER>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker onYearChange={undefined}
                    label="Add dates to graph"
                    value={value}
                    maxDate={dayjs(maximumDate)}
                    minDate={dayjs(minimumDate)}
                    onChange={() => true}
                    onAccept={HandleOnAccept}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <DATELIST_BOX>
                {
                    dateList.map((e: OrderTrendDto) => {
                        return (
                            <div className="chipObject">
                                <p>{e.OrderDate}</p>
                                <p onClick={() => handleDelete(e)}><DeleteIcon fontSize='small'/></p>
                            </div>
                        )
                    })
                }
            </DATELIST_BOX>
        </COMPARE_DATEPICKER>
    )
}

