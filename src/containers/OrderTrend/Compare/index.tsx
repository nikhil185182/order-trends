import { Dayjs } from "dayjs";
import { ORDERTREND_BAR_GRAPH_OPTIONS } from "../../../shared/config";
import { DUPLICATE_DATA, DATA_NOT_FOUND, SELECT_DATES } from "./messages";
import { addOrderDateList, deleteOrderDateList } from "../reducer";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../shared/utils/redux/hooks";
import { getOrderListData, getOrderTrendData } from "./selector";
import {
  StyledCompareGraph,
  StyledComparePicker,
  StyledCompareTab,
  StyledDateListBox,
} from "./styledComponents";
import { Bar } from "react-chartjs-2";
import { Orders, GraphType } from "../models";
import React, { useMemo, useState } from "react";
import { GRAPH_DUMMY_DATA } from "../../../shared/global_constants";
import { TextField } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateChip } from "../../../components/DateChip";
import { DeleteIcon } from "../../../components/DeleteIcon";
import { getDateToString, getMaxDate, getMinDate } from "./utils";
import {
  setConsoleMessage,
  setConsoleOpen,
} from "../../../shared/utils/redux/appReducer";
import { setGraphObject } from "../utils";

const Compare = () => {
  const dispatch = useAppDispatch();

  const orderData = useAppSelector(getOrderTrendData);
  const selectedDateList = useAppSelector(getOrderListData);

  const [value, setValue] = useState<Dayjs | null>(getMaxDate(orderData));
  const [graphData, SetGraphData] = useState<GraphType>(GRAPH_DUMMY_DATA);

  useMemo(() => {
    const temp_graphData = setGraphObject(selectedDateList);
    SetGraphData(temp_graphData);
  }, [selectedDateList]);

  const handleDelete = (e: Orders) => dispatch(deleteOrderDateList(e));

  const displayPopUp = (message: string) => {
    dispatch(setConsoleMessage(message));
    dispatch(setConsoleOpen(true));
  };

  const handleOnAccept = (newValue: Dayjs | null) => {
    setValue(newValue);
    const val = getDateToString(newValue);
    const index = orderData.findIndex(
      (item) => item.OrderDate.slice(0, 10) === val
    );
    if (index > -1) {
      const object = orderData[index];
      if (selectedDateList.includes(object)) {
        displayPopUp(DUPLICATE_DATA);
      } else {
        dispatch(addOrderDateList(object));
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
            maxDate={getMaxDate(orderData)}
            views={["year", "month", "day"]}
            minDate={getMinDate(orderData)}
            onChange={() => true}
            onAccept={handleOnAccept}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <StyledDateListBox>
          {selectedDateList.map((e: Orders, index) => (
            <DateChip
              label={e.OrderDate.slice(0, 10)}
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
