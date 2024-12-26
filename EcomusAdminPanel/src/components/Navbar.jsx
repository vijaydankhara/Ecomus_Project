import React from "react";
import Sidebar from "./Sidebar";
// import logo from "../assets/logo.svg";
import logo from "../assets/logow.png";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="main-content flex flex-col w-full">
        <div className="navbar flex justify-between items-center">
          <div className="flex items-center">
          <NavLink to='/'>

            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </NavLink>
          </div>
          <h1 className="text-center flex-grow">ADMIN PANEL</h1>
          <div className="navbar-icons flex">
            <NavLink to="/registerlogin" className="icon-link">
              <IoMdLogIn className="icon" />
            </NavLink>
            <NavLink to="/profile" className="icon-link">
              <CgProfile className="icon" />
            </NavLink>
          </div>
        </div>
        <div className="content flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
