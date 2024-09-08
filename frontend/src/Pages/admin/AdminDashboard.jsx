import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AdminSidebar from "../../components/admin/AdminSidebar";
import Topbar from "../../components/ui/Topbar";

const AdminDashboard = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="flex flex-row bg-neutral-200 h-screen w-screen overflow-hidden">
        <AdminSidebar />
        <div className="flex-1">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
