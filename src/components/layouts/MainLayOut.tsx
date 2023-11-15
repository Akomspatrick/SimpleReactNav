import React from "react";
import { TopBar } from "../common/TopBar";
import Box from "@mui/material/Box";
import SideBar from "../common/SideBar";
import sizeConfig from "../configs/sizeConfig";
import colorConfigs from "../configs/colorConfigs";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <TopBar></TopBar>
      <Box
        component="nav"
        sx={{
          width: sizeConfig.sidebar.width,
          flexShrink: 0,
        }}
      >
        <SideBar />
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, 
        p: 3, 
        width: `calc(100% - ${sizeConfig.sidebar.width})`,
        minHeight : "100vh",
        backgroundColor:colorConfigs.mainBg,
      }}>
      <Toolbar/>
      <Outlet/>
      </Box>
    </Box>
  );
};

export default MainLayOut;
