import React, { useContext, useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { usersUrl } from "../main";
import { toast } from "react-hot-toast";
import { Context } from "../main";

const Login = () => {
  let [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  let navigate = useNavigate();

  let loginUser = async () => {
    try {
      let { data } = await axios.post(`${usersUrl}/login`, loginUserData);

      toast.success(data.message);
      let { token } = data;
      localStorage.setItem("token", JSON.stringify(token));
      setIsAuthenticated(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
      toast.error(error.response.data.message);
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
          <Link to="/register" className="login_link">
            <span>Register</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
