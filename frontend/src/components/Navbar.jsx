import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  let logoutHandler = async () => {};

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>

          <li>
            <Link onClick={logoutHandler}>Logout</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

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
