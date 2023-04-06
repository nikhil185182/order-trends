import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  ORDER_TREND,
  COMPANY_TREND,
  NEW_USER,
  INACTIVE_USER,
} from "../../shared/global_constants";
import { useNavigate } from "react-router-dom";
import DrawerComp from "../Drawer";
import React, { useState, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/utils/redux/selectors/hooks";
import { fetchFeature } from "../../shared/utils/redux/reducers/appReducer";

export default function NavBar() {
  let navigate = useNavigate();
  
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const tab = useAppSelector((state) => state.globalState.feature);

  return (
    <AppBar style={{ background: "#54B948" }}>
      <Toolbar>
        <Typography>e-Commerce Analytics</Typography>
        {isMatch ? (
          <div style={{ marginLeft: "auto" }}>
            <DrawerComp />
          </div>
        ) : (
          <div className="btn_cls" style={{ marginLeft: "auto" }}>
            <Button
              sx={{ border: tab[0] ? "1px solid white" : "", color: "white" }}
              onClick={() => {
                navigate("/");
              }}
            >
              {ORDER_TREND}
            </Button>
            <Button
              sx={{ border: tab[1] ? "1px solid white" : "", color: "white" }}
              onClick={() => {
                navigate("/companytrend");
              }}
            >
              {COMPANY_TREND}
            </Button>
            <Button
              sx={{ border: tab[2] ? "1px solid white" : "", color: "white" }}
              onClick={() => {
                navigate("/CompaniesEnrolled");
              }}
            >
              {NEW_USER}
            </Button>
            <Button
              sx={{ border: tab[3] ? "1px solid white" : "", color: "white" }}
              onClick={() => {
                navigate("/inactiveUsers");
              }}
            >
              {INACTIVE_USER}
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
