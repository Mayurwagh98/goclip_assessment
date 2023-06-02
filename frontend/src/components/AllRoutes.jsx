import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login.jsx"
import Dashboard from "../pages/Dashboard.jsx"
import Signup from "../pages/Signup.jsx"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
