import React from "react";
import { Outlet } from "react-router-dom";
import DashBoardDrawer from "../Pages/DashBoard/DashBoardDrawer/DashBoardDrawer";
import NavBar from "../Pages/SharedPages/NavBar/NavBar";

const DashBoardLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <DashBoardDrawer></DashBoardDrawer>
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default DashBoardLayout;
