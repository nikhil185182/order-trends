import dayjs, { Dayjs } from 'dayjs';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { ORDERTREND_BAR_GRAPH_OPTIONS } from '../../shared/config';
import { DUPLICATE_DATA, DATA_NOT_FOUND } from '../../shared/global_constants';
import { addOrderDateList } from '../OrderTrend/reducer';
import { useAppSelector, useAppDispatch } from '../../shared/utils/redux/selectors/hooks';
import { getDateFromDatePicker, getOrderListMap } from '../../shared/utils/helperFunctions';
import { getOrderListData, selectOrderTrendData } from '../OrderTrend/selector';
import { CompareTab ,CompareGraph, ComparePicker, DateListBox  } from './styledComponents';
import { Bar, Line } from 'react-chartjs-2';
import { Orders, GraphType } from '../OrderTrend/models';
import React, { useEffect, useState } from 'react';
import { GRAPH_DUMMY_DATA, ATTEMPTED_ORDERS_LABEL, ORANGE, COMPLETED_ORDERS_LABEL, BLUE, TOTAL_ORDERS_LABEL, GREEN } from '../../shared/global_constants';
import { Snackbar, TextField, Chip, FormControlLabel, Radio } from '@mui/material';
import { LocalizationProvider, DatePicker, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';




const Compare = () => {

    const dispatch = useAppDispatch();

    const orderMap = getOrderListMap(useAppSelector(selectOrderTrendData));

    const minimumDate = Array.from(orderMap)[0][0];
    const maximumDate = Array.from(orderMap)[orderMap.size - 1][0];

    const [value, setValue] = useState<Dayjs | null>(dayjs(maximumDate));
    const [dateList, SetDateList] = useState<Orders[]>([orderMap.get(maximumDate)!]);

    const [consoleMessage, SetConsoleMessage] = useState("");
    const [consoleOpen, SetConsoleOpen] = useState(false);

    const [graphData, SetGraphData] = useState<GraphType>(GRAPH_DUMMY_DATA);

    const [isLine, SetLine] = useState(true);

    const handleBarClick = () => SetLine(false);
    const handleLineClick = () => SetLine(true);

    const handleDelete = (e: Orders) => { SetDateList(dateList.filter(item => item != e))
        dispatch(addOrderDateList({orderDateList:dateList}));
    }

    // useEffect(() => {
    //     dispatch(addOrderDateList({ orderDateList: dateList }));
    // }, [dateList]);

    const HandleOnAccept = (newValue: Dayjs | null) => {
        setValue(newValue);
        const val = getDateFromDatePicker(newValue);
        if (orderMap.has(val)) {
            const flag = dateList.filter(e=>e.OrderDate==orderMap.get(val)!.OrderDate).length > 0;
            if (!flag){
                SetDateList([...dateList, orderMap.get(val)!]);
                dispatch(addOrderDateList({orderDateList:dateList}));
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

    const ReduxdateList = useAppSelector(getOrderListData);

    useEffect(() => {
        var temp_graphData = {
            labels: dateList.map((item) => item.OrderDate.slice(0, 10)),
            datasets: [
                {
                    label: ATTEMPTED_ORDERS_LABEL,
                    data: dateList.map((item) => item.AttemptedOrders),
                    borderColor: ORANGE,
                    backgroundColor: ORANGE,
                },
                {
                    label: COMPLETED_ORDERS_LABEL,
                    data: dateList.map((item) => item.CompletedOrders),
                    borderColor: BLUE,
                    backgroundColor: BLUE,
                },
                {
                    label: TOTAL_ORDERS_LABEL,
                    data: dateList.map((item) => item.TotalOrders),
                    borderColor: GREEN,
                    backgroundColor: GREEN,
                },
            ],
        }
        SetGraphData(temp_graphData);
    }, [ReduxdateList]);

    return (
        <CompareTab>
            <ComparePicker>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={consoleOpen}
                    onClose={() => SetConsoleOpen(false)}
                    message={consoleMessage}
                    autoHideDuration={3000}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker onYearChange={undefined}
                        label="Select date(s)"
                        value={value}
                        maxDate={dayjs(maximumDate)}
                        views={['year', 'month', 'day']}
                        minDate={dayjs(minimumDate)}
                        onChange={() => true}
                        onAccept={HandleOnAccept}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <DateListBox>
                    {
                        dateList.map((e: Orders) => {
                            return (
                                <Chip style={{ position: "relative" }} className="chipObject" label={e.OrderDate}
                                    icon={
                                        <HighlightOffTwoToneIcon
                                            style={{ position: "absolute", right: "10px" }}
                                            onClick={() => handleDelete(e)}
                                        />
                                    } variant='outlined' />
                            )
                        })
                    }
                </DateListBox>
            </ComparePicker>
            <CompareGraph>
                {isLine ? <Bar options={ORDERTREND_BAR_GRAPH_OPTIONS} data={graphData} />
                    : <Line options={ORDERTREND_BAR_GRAPH_OPTIONS} data={graphData} />
                }
                {/* <ChartCustomise>
                    <FormControlLabel control={<Radio style={{ color: GREEN }} onClick={handleLineClick} checked={isLine} />} label={"Line Chart"} />
                    <FormControlLabel control={<Radio style={{ color: GREEN }} onClick={handleBarClick} checked={!isLine} />} label="Bar Chart" />
                </ChartCustomise> */}
            </CompareGraph>
        </CompareTab>
    )
}

export default Compare;
