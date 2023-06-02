import React, { useState } from "react";
import axios from "axios";
import "../styles/Singnup.css";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Signup = () => {
  let [signupData, setSignupData] = useState({
    name: "",
    company_name: "",
    mobile_no: "",
    email: "",
    role: "",
    password: "",
  });

  let handleForm = (event) => {
    let { name, value } = event.target;

    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  let signupUser = async () => {
    try {
      let { data } = await axios.post(
        "http://localhost:8000/api/users/register",
        signupData
      );

      console.log(data);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="signup_form">
        <h1>Signup</h1>

        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={signupData.name}
          onChange={handleForm}
        />

        <input
          type="text"
          placeholder="Enter your company name"
          name="company_name"
          value={signupData.company_name}
          onChange={handleForm}
        />
        <input
          type="number"
          placeholder="Enter your mobile number"
          name="mobile_no"
          value={signupData.mobile_no}
          onChange={handleForm}
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={signupData.email}
          onChange={handleForm}
        />
        <input
          type="text"
          placeholder="Enter your role"
          name="role"
          value={signupData.role}
          onChange={handleForm}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={signupData.password}
          onChange={handleForm}
        />
        <input
          type="submit"
          value="Register"
          onClick={signupUser}
          className="submit_input"
          style={{
            backgroundColor: "#5D9C59",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        />
        <div className="already_have_acc">
          Already have an account?{" "}
          <Link to="/login" className="login_link">
            <span>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
