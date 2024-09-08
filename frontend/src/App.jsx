import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Home from "./Pages/common/Home.jsx";
import RootLayout from "./components/layout/RootLayout.jsx";
import StudentLogin from "./Pages/student/StudentLogin.jsx";
import RegisterStudent from "./Pages/student/RegisterStudent.jsx";
import StudentDashboard from "./Pages/student/StudentDashboard.jsx";
import Profile from "./Pages/student/Profile.jsx";
import AddAttendence from "./Pages/student/AddAttendence.jsx";
import LeaveRequest from "./Pages/student/LeaveRequest.jsx";
import Stats from "./Pages/student/Stats.jsx";
import AdminDashboard from "./Pages/admin/AdminDashboard.jsx";
import AllStudents from "./Pages/admin/AllStudents.jsx";
import AllRequsts from "./Pages/admin/AllRequsts.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" index={true} element={<Home />} />
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/sign-up" element={<RegisterStudent />} />
      </Route>

      {/* Authenticated Routes for Students */}
      <Route path="/dashboard" element={<StudentDashboard />}>
        <Route path="/dashboard" index={true} element={<Stats />} />
        <Route path="/dashboard/leave-request" element={<LeaveRequest />} />
        <Route path="/dashboard/mark-attendence" element={<AddAttendence />} />
        <Route path="/dashboard/me" element={<Profile />} />
      </Route>
      {/* Admin Speciffic routes. */}
      <Route path="/admin/" element={<AdminDashboard />}>
        <Route path="/admin/dashboard" index={true} element={<AllStudents />} />
        <Route
          path="/admin/all-students"
          index={true}
          element={<AllStudents />}
        />
        <Route path="/admin/requests" element={<AllRequsts />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
