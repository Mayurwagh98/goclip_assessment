import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { toast } from "react-hot-toast";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  let logoutHandler = async () => {
    localStorage.clear();

    setIsAuthenticated(false);
    navigate("/login");
    toast.success("Logged Out");
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          {isAuthenticated ? (
            <li>
              <Link onClick={logoutHandler}>Logout</Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}

          <li>
            <NavLink to="/register">Signup</NavLink>
          </li>
          <li>
            <NavLink to="/candidatelist">Candidates</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navbar };
