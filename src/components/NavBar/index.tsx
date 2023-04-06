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
  ECOM_ANALYTICS,
  GREEN,
} from "../../shared/global_constants";
import { useNavigate } from "react-router-dom";
import DrawerComp from "../Drawer";
import React from "react";
import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import { NavbarButton } from "../NavbarButton";
import { NavbarConatiner } from "../NavbarConatiner";

export default function NavBar() {
  let navigate = useNavigate();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const tab = useAppSelector((state) => state.globalState.feature);

  return (
    <AppBar style={{ background: GREEN }}>
      <Toolbar>
        <NavbarButton onClick={() => navigate("/")}>
          {ECOM_ANALYTICS}
        </NavbarButton>
        <NavbarConatiner>
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <NavbarButton
                sx={{ border: tab[0] ? "1px solid white" : "" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                {ORDER_TREND}
              </NavbarButton>
              <NavbarButton
                sx={{ border: tab[1] ? "1px solid white" : "" }}
                onClick={() => {
                  navigate("/companytrend");
                }}
              >
                {COMPANY_TREND}
              </NavbarButton>
              <NavbarButton
                sx={{ border: tab[2] ? "1px solid white" : "" }}
                onClick={() => {
                  navigate("/CompaniesEnrolled");
                }}
              >
                {NEW_USER}
              </NavbarButton>
              <NavbarButton
                sx={{ border: tab[3] ? "1px solid white" : "" }}
                onClick={() => {
                  navigate("/inactiveUsers");
                }}
              >
                {INACTIVE_USER}
              </NavbarButton>
            </>
          )}
        </NavbarConatiner>
      </Toolbar>
    </AppBar>
  );
}
