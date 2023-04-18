import React from "react";
import Statistics from "./Statistics";
import Compare from "./Compare";
import { Box, Tab, Tabs } from "@mui/material";
import { StyledOrderTrendBox } from "./styledComponents";
import { COMPARE, STATISTICS } from "./messages";

const OrderTrend = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  return (
    <StyledOrderTrendBox>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label={STATISTICS} />
          <Tab label={COMPARE} />
        </Tabs>
      </Box>
      {value ? <Compare /> : <Statistics />}
    </StyledOrderTrendBox>
  );
};

export default OrderTrend;
