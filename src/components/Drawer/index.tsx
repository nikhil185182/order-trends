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
import { DrawerTab } from "../DrawerTab";

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
            <DrawerTab
              details={{
                to: RoutesPath.orderTrend,
                status: true,
                label: ORDER_TREND,
              }}
            />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <DrawerTab
              details={{
                to: RoutesPath.comapanyOrderTrend,
                status: true,
                label: COMPANY_TREND,
              }}
            />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <DrawerTab
              details={{
                to: RoutesPath.companiesEnrolled,
                status: true,
                label: NEW_USER,
              }}
            />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <DrawerTab
              details={{
                to: RoutesPath.inactiveCompanies,
                status: true,
                label: INACTIVE_USER,
              }}
            />
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
