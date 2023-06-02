import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { usersUrl } from "../main";

const Login = () => {
  let [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  let loginUser = async () => {
    try {
      let { data } = await axios.post(`${usersUrl}/login`, loginUserData);

      alert(data.message);

      // console.log(data);
      let { token } = data;
      localStorage.setItem("token", JSON.stringify(token));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  let handleLogin = (event) => {
    let { name, value } = event.target;

    setLoginUserData({
      ...loginUserData,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="login_form">
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={loginUserData.email}
          onChange={handleLogin}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={loginUserData.password}
          onChange={handleLogin}
        />
        <input
          type="submit"
          value="Login"
          onClick={loginUser}
          className="submit_input"
          style={{
            backgroundColor: "#5D9C59",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        />
        <div className="dont_have_acc">
          Don't have an account?{" "}
          <Link to="/signup" className="login_link">
            <span>Register</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
