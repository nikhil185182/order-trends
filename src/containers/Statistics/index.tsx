import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { Orders, GraphType } from "../OrderTrend/models";
import {
  ORDERTREND_LINE_GRAPH_OPTIONS,
  ORDERTREND_BAR_GRAPH_OPTIONS,
} from "../../shared/config";
import { useAppDispatch, useAppSelector } from "../../shared/utils/redux/hooks";
import {
  selectOrderTrendChart,
  selectOrderTrendData,
  selectOrderTrendDays,
} from "./selector";
import { FormControlLabel } from "@mui/material";
import {
  StyledChartCustomise,
  StyledDaysCustomise,
  StyledStatisticsGraph,
  StyledStatisticsTab,
} from "./styledComponents";
import { RadioButton } from "../../components/RadioButton";
import { ContainedButton } from "../../components/ConatinedButton";
import { OutlinedButton } from "../../components/OutlinedButton";
import { BAR_CHART, LINE_CHART } from "./constants";
import { ConfigDays } from "./constants";
import { getDaysLabel, getSlicedDays, setGraphObject } from "./utils";
import { setOrderTrendChart, setOrderTrendDays } from "../OrderTrend/reducer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
  const dispatch = useAppDispatch();

  const orderList: Orders[] = useAppSelector(selectOrderTrendData);
  const isLineChart = useAppSelector(selectOrderTrendChart);
  const currentDays = useAppSelector(selectOrderTrendDays);

  const [graphData, SetGraphData] = useState<GraphType>(
    setGraphObject(getSlicedDays(orderList, currentDays))
  );

  useEffect(() => {
    const data = getSlicedDays(orderList, currentDays);
    const tempGraphData = setGraphObject(data);
    SetGraphData(tempGraphData);
  }, [currentDays, orderList]);

  const updateDays = (days: number) => dispatch(setOrderTrendDays(days));
  const handleClick = (flag: boolean) => dispatch(setOrderTrendChart(flag));

  return (
    <StyledStatisticsTab>
      <StyledStatisticsGraph>
        {isLineChart ? (
          <Line options={ORDERTREND_LINE_GRAPH_OPTIONS} data={graphData} />
        ) : (
          <Bar options={ORDERTREND_BAR_GRAPH_OPTIONS} data={graphData} />
        )}
      </StyledStatisticsGraph>
      <StyledChartCustomise>
        <FormControlLabel
          control={
            <RadioButton
              onClick={() => handleClick(true)}
              checked={isLineChart}
            />
          }
          label={LINE_CHART}
        />
        <FormControlLabel
          control={
            <RadioButton
              onClick={() => handleClick(false)}
              checked={!isLineChart}
            />
          }
          label={BAR_CHART}
        />
      </StyledChartCustomise>
      <StyledDaysCustomise>
        {ConfigDays.map((days, index) => {
          const daysLabel = getDaysLabel(days);
          if (days === currentDays) {
            return (
              <ContainedButton key={index} onClick={() => updateDays(days)}>
                {daysLabel}
              </ContainedButton>
            );
          } else {
            return (
              <OutlinedButton key={index} onClick={() => updateDays(days)}>
                {daysLabel}
              </OutlinedButton>
            );
          }
        })}
      </StyledDaysCustomise>
    </StyledStatisticsTab>
  );
};

export default Statistics;
