import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import StudentSidebar from "../../components/student/StudentSidebar";
import Topbar from "../../components/ui/Topbar";

const StudentDashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);

  // if (!userInfo) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="flex flex-row bg-neutral-200 h-screen w-screen overflow-hidden">
        <StudentSidebar />
        <div className="flex-1">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
