import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./layout/layout";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import TeacherTimeTable from "./pages/admin/teacherTimeTable";
import HomeAdmin from "./pages/admin/home";
import Teacher from "./pages/admin/teacher";
import ViewTeacher from "./pages/admin/viewTeacher";
import Home from "./home";
import Profile from "./pages/dashboard/profile";
import TeacherupdateTimetable from "./pages/admin/teacherupdateTimetable";
const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "admin",
        element: <HomeAdmin></HomeAdmin>,
      },

      {
        path: "create-Account",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "teacherTimeTable",
        element: <TeacherTimeTable></TeacherTimeTable>,
      },
      {
        path: "teacher",
        element: <Teacher></Teacher>,
      },
      {
        path: "teacher-view/:id",
        element: <ViewTeacher></ViewTeacher>,
      },
      {
        path: "timetable",
        element: <Home></Home>,
      },
      {
        path: "timetable/update/:id",
        element: <TeacherupdateTimetable></TeacherupdateTimetable>,
      }
      , {
        path: "profile",
        element: <Profile></Profile>,
      }
    ],
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
);
