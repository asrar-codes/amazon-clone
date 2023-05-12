import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
