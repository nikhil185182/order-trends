import {
  AppBar,
  Toolbar,
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
import { RoutesPath } from "../../shared/config";
import Link from '@mui/material/Link';
import { NavLink } from "react-router-dom";
import { NavTab, NavtabType } from "../NavTab";

export default function NavBar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar style={{ background: GREEN }}>
      <Toolbar>
        <NavTab details={{to:RoutesPath.orderTrend,label:ECOM_ANALYTICS,status:false}}/>
        <NavbarConatiner>
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <NavTab details={{to:RoutesPath.orderTrend,label:ORDER_TREND,status:true}}/>
              <NavTab details={{to:RoutesPath.comapanyOrderTrend,label:COMPANY_TREND,status:true}}/>
              <NavTab details={{to:RoutesPath.companiesEnrolled,label:NEW_USER,status:true}}/>
              <NavTab details={{to:RoutesPath.inactiveCompanies,label:INACTIVE_USER,status:true}}/>
            </>
          )}
        </NavbarConatiner>
      </Toolbar>
    </AppBar>
  );
}
