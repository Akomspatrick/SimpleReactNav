import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import colorConfigs from "../configs/colorConfigs";
import appRoutes from "../../routes/appRoutes";
import assets from "../../assets/images";
import sizeConfig from "../configs/sizeConfig";
import SidebarItemCollapse from "./SidebarItemCollapse";
import SidebarItem from "./SidebarItem";
import { useEffect, useState } from "react";
import { RouteType } from "../../routes/config";

const Sidebar = () => {
  const [newAppRoutes, UseNewAppRoutes] = useState<RouteType[]>(appRoutes);

  useEffect(() => {
    appRoutes.map((route, index) => {
      if (route?.child) {
        UseNewAppRoutes(route.child);
      }
    }, []);
  });
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfig.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfig.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <Avatar src={assets.images.logo} />
          </Stack>
        </Toolbar>
        {newAppRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
