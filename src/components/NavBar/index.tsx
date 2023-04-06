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

  const dispatch = useAppDispatch();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [tab, SetTab] = useState([true, false, false, false]);
  const [tab, SetTab] = useState([true, false, false, false]);

  const feature = useAppSelector((state) => state.globalState.feature);


  useEffect(() => {
    tab.fill(false);
    console.log("Feature",feature);
    switch (feature) {
      case "orderTrend":
        tab[0] = true;
        break;
      case "companyOrderTrend":
        tab[1] = true;
        break;
      case "companiesEnrolled":
        tab[2] = true;
        break;
      case "inactiveCustomers":
        tab[3] = true;
        break;
    }
    SetTab(tab);
  }, [feature]);

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
              onClick={() => { dispatch(fetchFeature("orderTrend")); navigate('/');}}
            >
              {ORDER_TREND}
            </Button>
            <Button
              sx={{ border: tab[1] ? "1px solid white" : "", color: "white" }}
              onClick={() => { dispatch(fetchFeature("companyOrderTrend")); navigate('/companytrend'); }}
            >
              {COMPANY_TREND}
            </Button>
            <Button
              sx={{ border: tab[2] ? "1px solid white" : "", color: "white" }}
              onClick={() => { dispatch(fetchFeature("companiesEnrolled"));  navigate('/newUsers');}}
            >
              {NEW_USER}
            </Button>
            <Button
              sx={{ border: tab[3] ? "1px solid white" : "", color: "white" }}
              onClick={() => {dispatch(fetchFeature("inactiveCustomers")); navigate('/inactiveUsers')}}
            >
              {INACTIVE_USER}
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
