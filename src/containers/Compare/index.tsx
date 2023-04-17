import dayjs, { Dayjs } from "dayjs";
import { ORDERTREND_BAR_GRAPH_OPTIONS } from "../../shared/config";
import { DUPLICATE_DATA, DATA_NOT_FOUND, SELECT_DATES } from "./messages";
import { addOrderDateList, deleteOrderDateList } from "../OrderTrend/reducer";
import { useAppSelector, useAppDispatch } from "../../shared/utils/redux/hooks";
import { getOrderListData, getOrderTrendData } from "./selector";
import {
  StyledCompareGraph,
  StyledComparePicker,
  StyledCompareTab,
  StyledDateListBox,
} from "./styledComponents";
import { Bar } from "react-chartjs-2";
import { Orders, GraphType } from "../OrderTrend/models";
import React, { useMemo, useState } from "react";
import { GRAPH_DUMMY_DATA } from "../../shared/global_constants";
import { TextField } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateChip } from "../../components/DateChip";
import { DeleteIcon } from "../../components/DeleteIcon";
import { setGraphObject } from "../Statistics/utils";
import { getDateToString } from "./utils";
import {
  setConsoleMessage,
  setConsoleOpen,
} from "../../shared/utils/redux/appReducer";

 const  Compare = () => {
  const dispatch = useAppDispatch();

  const orderData = useAppSelector(getOrderTrendData);
  const dateList = useAppSelector(getOrderListData);

  const minimumDate: Date = new Date(orderData[0].OrderDate);
  const maximumDate: Date = new Date(orderData[orderData.length - 1].OrderDate);

  const [value, setValue] = useState<Dayjs | null>(dayjs(maximumDate));
  const [graphData, SetGraphData] = useState<GraphType>(GRAPH_DUMMY_DATA);

  useMemo(() => {
    const temp_graphData = setGraphObject(dateList);
    SetGraphData(temp_graphData);
  }, [dateList]);

  const handleDelete = (e: Orders) => dispatch(deleteOrderDateList(e));

  const displayPopUp = (message: string) => {
    console.log("invoked");
    dispatch(setConsoleMessage(message));
    dispatch(setConsoleOpen(true));
  };

  const HandleOnAccept = (newValue: Dayjs | null) => {
    setValue(newValue);
    const val = getDateToString(newValue);
    const index = orderData.findIndex(
      (item) => item.OrderDate.slice(0, 10) === val
    );
    if (index > -1) {
      const obj = orderData[index];
      const flag = dateList.includes(obj);
      if (flag) {
        displayPopUp(DUPLICATE_DATA);
      } else {
        dispatch(addOrderDateList(obj));
      }
    } else {
      displayPopUp(DATA_NOT_FOUND);
    }
  };

  return (
    <StyledCompareTab>
      <StyledComparePicker>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label={SELECT_DATES}
            value={value}
            maxDate={dayjs(maximumDate)}
            views={["year", "month", "day"]}
            minDate={dayjs(minimumDate)}
            onChange={() => true}
            onAccept={HandleOnAccept}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <StyledDateListBox>
          {dateList.map((e: Orders, index) => (
            <DateChip
              label={e.OrderDate.toString().slice(0, 10)}
              key={index}
              icon={<DeleteIcon onClick={() => handleDelete(e)} />}
              variant="outlined"
            />
          ))}
        </StyledDateListBox>
      </StyledComparePicker>
      <StyledCompareGraph>
        <Bar options={ORDERTREND_BAR_GRAPH_OPTIONS} data={graphData} />
      </StyledCompareGraph>
    </StyledCompareTab>
  );
};

export default Compare;