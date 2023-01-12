import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
