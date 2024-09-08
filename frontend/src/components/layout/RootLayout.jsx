import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../ui/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
