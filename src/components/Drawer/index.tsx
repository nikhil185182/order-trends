import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IconButton, List, ListItemButton } from "@mui/material";
import {
  COMPANY_TREND,
  INACTIVE_USER,
  NEW_USER,
  ORDER_TREND,
} from "../../shared/global_constants";
import MenuIcon from "@mui/icons-material/Menu";
import { RoutesPath } from "../../shared/config";
import { DrawerLink } from "../DrawerLink";

export default function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleClick = () => setOpenDrawer(!openDrawer);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
        <List>
          <ListItemButton onClick={handleClick}>
            <DrawerLink to={RoutesPath.orderTrend}>{ORDER_TREND}</DrawerLink>
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <DrawerLink to={RoutesPath.comapanyOrderTrend}>
              {COMPANY_TREND}
            </DrawerLink>
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <DrawerLink to={RoutesPath.companiesEnrolled}>
              {NEW_USER}
            </DrawerLink>
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <DrawerLink to={RoutesPath.inactiveCompanies}>
              {INACTIVE_USER}
            </DrawerLink>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
