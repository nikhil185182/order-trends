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
  ATTEMPTED_ORDERS_LABEL,
  BLUE,
  COMPLETED_ORDERS_LABEL,
  GRAPH_DUMMY_DATA,
  GREEN,
  ORANGE,
  TOTAL_ORDERS_LABEL,
} from "../../shared/global_constants";
import {
  ORDERTREND_LINE_GRAPH_OPTIONS,
  ORDERTREND_BAR_GRAPH_OPTIONS,
} from "../../shared/config";
import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";
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
import { getDaysLabel } from "./utils";

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
  const [isLine, SetLine] = useState(true);

  const orderList: Orders[] = useAppSelector(selectOrderTrendData);
  var Ddata: Orders[] = [];

  const [graphData, SetGraphData] = useState<GraphType>(GRAPH_DUMMY_DATA);

  const [current, setCurrent] = useState(30);

  useEffect(() => {
    updateDays(30);
  }, [orderList]);

  const updateDays = (days: number) => {
    Ddata.length = 0;
    const initIndex =
      orderList.length - 1 - days >= 0 ? orderList.length - 1 - days : 0;
    Ddata = orderList.slice(initIndex, orderList.length - 1);
    var temp_graphData = {
      labels: Ddata.map((item) => item.OrderDate.slice(0, 10)),
      datasets: [
        {
          label: ATTEMPTED_ORDERS_LABEL,
          data: Ddata.map((item) => item.AttemptedOrders),
          borderColor: ORANGE,
          backgroundColor: ORANGE,
        },
        {
          label: COMPLETED_ORDERS_LABEL,
          data: Ddata.map((item) => item.CompletedOrders),
          borderColor: BLUE,
          backgroundColor: BLUE,
        },
        {
          label: TOTAL_ORDERS_LABEL,
          data: Ddata.map((item) => item.TotalOrders),
          borderColor: GREEN,
          backgroundColor: GREEN,
        },
      ],
    };
    SetGraphData(temp_graphData);
    setCurrent(days);
  };

  const handleBarClick = () => SetLine(false);
  const handleLineClick = () => SetLine(true);

  return (
    <StatisticsTab>
      <StatisticsGraph>
        {isLine ? (
          <Line options={ORDERTREND_LINE_GRAPH_OPTIONS} data={graphData} />
        ) : (
          <Bar options={ORDERTREND_BAR_GRAPH_OPTIONS} data={graphData} />
        )}
      </StatisticsGraph>
      <ChartCustomise>
        <FormControlLabel 
          control={<RadioButton onClick={handleLineClick} checked={isLine} />}
          label={LINE_CHART}
        />
        <FormControlLabel
          control={<RadioButton onClick={handleBarClick} checked={!isLine} />}
          label={BAR_CHART}
        />
      </ChartCustomise>
      <DaysCustomise>
        {ConfigDays.map((e) => {
          const daysLabel = getDaysLabel(e);
          if (e == current) {
            return (
              <ContainedButton onClick={() => updateDays(e)}>
                {daysLabel}
              </ContainedButton>
            );
          } else {
            return (
              <OutlinedButton onClick={() => updateDays(e)}>
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
