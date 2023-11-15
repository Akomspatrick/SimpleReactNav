import React from "react";
import sizeConfig from "../configs/sizeConfig";
import colorConfigs from "../configs/colorConfigs";
import { AppBar } from "@mui/material";

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
	
	</Toolbar>
	</AppBar>
  );
};
