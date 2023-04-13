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
import { GRAPH_DUMMY_DATA } from "../../shared/global_constants";
import {
  ORDERTREND_LINE_GRAPH_OPTIONS,
  ORDERTREND_BAR_GRAPH_OPTIONS,
} from "../../shared/config";
import { useAppSelector } from "../../shared/utils/redux/hooks";
import { selectOrderTrendData } from "./selector";
import { FormControlLabel } from "@mui/material";
import {
  ChartCustomise,
  DaysCustomise,
  StatisticsGraph,
  StatisticsTab,
} from "./styledComponents";
import { RadioButton } from "../../components/RadioButton";
import { ContainedButton } from "../../components/ConatinedButton";
import { OutlinedButton } from "../../components/OutlinedButton";
import { BAR_CHART, LINE_CHART } from "./constants";
import { ConfigDays } from "./config";
import { getDaysLabel, getSlicedDays, setGraphObject } from "./utils";

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

  const orderList: Orders[] = useAppSelector(selectOrderTrendData);

  const [isLineChart, SetLineChart] = useState(true);
  const [graphData, SetGraphData] = useState<GraphType>(setGraphObject(getSlicedDays(orderList,30)));
  const [currentDays, setCurrentDays] = useState(30);

  const updateGraph = (days: number) => {
    const data = getSlicedDays(orderList,days);
    const tempGraphData = setGraphObject(data);
    SetGraphData(tempGraphData);
    setCurrentDays(days);
  };


  const handleClick = (flag: boolean) => SetLineChart(flag);

  return (
    <StatisticsTab>
      <StatisticsGraph>
        {isLineChart ? (
          <Line options={ORDERTREND_LINE_GRAPH_OPTIONS} data={graphData} />
        ) : (
          <Bar options={ORDERTREND_BAR_GRAPH_OPTIONS} data={graphData} />
        )}
      </StatisticsGraph>
      <ChartCustomise>
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
      </ChartCustomise>
      <DaysCustomise>
        {ConfigDays.map((days, index) => {
          const daysLabel = getDaysLabel(days);
          if (days === currentDays) {
            return (
              <ContainedButton key={index} onClick={() => updateGraph(days)}>
                {daysLabel}
              </ContainedButton>
            );
          } else {
            return (
              <OutlinedButton key={index} onClick={() => updateGraph(days)}>
                {daysLabel}
              </OutlinedButton>
            );
          }
        })}
      </DaysCustomise>
    </StatisticsTab>
  );
};

export default Statistics;
