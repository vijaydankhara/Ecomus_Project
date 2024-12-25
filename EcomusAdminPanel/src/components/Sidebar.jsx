import React from "react";
import { NavLink } from "react-router-dom";

import { FaUsers } from "react-icons/fa6";
import { RiProductHuntLine } from "react-icons/ri";
import { BsCartCheckFill } from "react-icons/bs";
import { BsDatabaseFillAdd } from "react-icons/bs";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className="sidebar-options">
        <NavLink to="/users" className="sidebar-option">
          <FaUsers />
          <span className="tooltip">Users</span>
        </NavLink>
      </div>
      <div className="sidebar-options">
        <NavLink to="/addproduct" className="sidebar-option">
          <BsDatabaseFillAdd />
          <span className="tooltip">
            <span>Add</span> Product</span>
        </NavLink>
      </div>
      <div className="sidebar-options">
        <NavLink to="/producttabal" className="sidebar-option">
          <RiProductHuntLine />
          <span className="tooltip">Items</span>
        </NavLink>
      </div>
      <div className="sidebar-options">
        <NavLink to="/orders" className="sidebar-option">
          <BsCartCheckFill />
          <span className="tooltip">Cart</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
