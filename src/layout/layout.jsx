import react from "react";

import { Navbar } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import HomePage from "../home";
const Layout = ({}) => {
  return (
    <div className="container">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand to="/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {/* <Navbar.Link active={true}>
            <Link to="/">Home</Link>
          </Navbar.Link> */}
          {Cookies.get("role") == "employee" ? <>
          <Navbar.Link active="true">
                    <Link to={"/timetable"}>Home</Link>
                  </Navbar.Link>
          </> : ""}

          {Cookies.get("access_token") ? (
            <>
              {Cookies.get("role") === "admin" ? (
                <>
                  <Navbar.Link>
                    <Link to={"admin"}>Admin Dashboard</Link>
                  </Navbar.Link>
                  <Navbar.Link>
                    <Link to={"create-Account"}>Add Teacher</Link>
                  </Navbar.Link>
                  <Navbar.Link>
                    <Link to={"teacherTimeTable"}>Teacher TimeTable</Link>
                  </Navbar.Link>
                  <Navbar.Link>
                    <Link to={"create-Account"}>Student TimeTable</Link>
                  </Navbar.Link>
                </>
              ) : (
                ""
              )}

              <Navbar.Link href="/navbars">
                <Link to={"profile"}>Profile</Link>
              </Navbar.Link>
              <Navbar.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  Cookies.remove("access_token");
                  Cookies.remove("role");
                  window.location.href = "/login";
                }}
              >
                Logout
              </Navbar.Link>
            </>
          ) : (
            <Navbar.Link href="/navbars">
              <Link to={"login"}>Login</Link>
            </Navbar.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
