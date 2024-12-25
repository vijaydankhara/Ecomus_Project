import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RegisterLogin from "../pages/Auth/RegisterLogin";
import AddProduct from "../pages/Product/AddProduct";
import ProductTabal from "../pages/Product/ProductTabal";
import Users from "../pages/Users/Users";
import Orders from "../pages/Orders/Orders";
import Profile from "../pages/Auth/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Layout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/registerlogin" element={<RegisterLogin />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/producttabal" element={<ProductTabal />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
