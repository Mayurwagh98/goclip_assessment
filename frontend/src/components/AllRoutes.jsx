import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Signup from "../pages/Signup.jsx";
import CandidateList from "../pages/CandidateList.jsx";
import CandidateDetails from "../pages/CandidateDetails.jsx";
import { Context } from "../main.jsx";

const AllRoutes = () => {
  const { isAuthenticated, localToken } = useContext(Context);
  return (
    <Routes>
      <Route
        path="/"
        element={localToken ? <Dashboard /> : <Navigate to={"/login"} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route
        path="/candidatelist"
        element={localToken ? <CandidateList /> : <Navigate to={"/login"} />}
      />
      <Route
        path="/details/:id"
        element={localToken ? <CandidateDetails /> : <Navigate to={"/login"} />}
      />
    </Routes>
  );
};

export default AllRoutes;
