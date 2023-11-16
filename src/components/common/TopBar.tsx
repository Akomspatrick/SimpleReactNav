import React from "react";
import sizeConfig from "../configs/sizeConfig";
import colorConfigs from "../configs/colorConfigs";
import { AppBar, Toolbar, Typography } from "@mui/material";

export const TopBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfig.sidebar.width})`,
        ml: `${sizeConfig.sidebar.width}`,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
		    color:colorConfigs.topbar.color
      }}
    >
	<Toolbar>
        <Typography variant="h6">
          React SideBar with Drop Down
          </Typography>
	</Toolbar>
	</AppBar>
  );
};
