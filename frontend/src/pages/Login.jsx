import React, { useContext, useState } from "react";
import "../styles/Login.css";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../main";
import { saveToken } from "../utils/localstorage";

const Login = () => {
  let [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });

  let { isAuthenticated, setIsAuthenticated } = useContext(Context);

  let loginUser = async () => {
    try {
      let { data } = await axios.post(
        "http://localhost:8000/api/users/login",
        loginUserData
      );

      alert(data.message);
      setIsAuthenticated(true);
      let { token } = data;
      saveToken(token);
      console.log(data);
    } catch (error) {
      setIsAuthenticated(false);
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
