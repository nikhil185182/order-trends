import { AppBar, Toolbar, useTheme, useMediaQuery } from "@mui/material";
import {
  ORDER_TREND,
  COMPANY_TREND,
  NEW_USER,
  INACTIVE_USER,
  ECOM_ANALYTICS,
  GREEN,
} from "../../shared/global_constants";
import DrawerComp from "../Drawer";
import React from "react";
import { NavbarConatiner } from "../NavbarConatiner";
import { RoutesPath } from "../../shared/config";
import { StyledNavLink } from "../NavLink";
import { StyledLink } from "../Link";

export default function NavBar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar style={{ background: GREEN }}>
      <Toolbar>
        <StyledLink to={RoutesPath.orderTrend}>{ECOM_ANALYTICS}</StyledLink>
        <NavbarConatiner>
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <StyledNavLink to={RoutesPath.orderTrend}>
                {ORDER_TREND}
              </StyledNavLink>
              <StyledNavLink to={RoutesPath.comapanyOrderTrend}>
                {COMPANY_TREND}
              </StyledNavLink>
              <StyledNavLink to={RoutesPath.companiesEnrolled}>
                {NEW_USER}
              </StyledNavLink>
              <StyledNavLink to={RoutesPath.inactiveCompanies}>
                {INACTIVE_USER}
              </StyledNavLink>
            </>
          )}
        </NavbarConatiner>
      </Toolbar>
    </AppBar>
  );
}
