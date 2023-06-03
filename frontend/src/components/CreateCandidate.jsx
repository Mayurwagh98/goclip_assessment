import React, { useState, useContext } from "react";
import axios from "axios";
import { Input } from "antd";
import { candidatesUrl } from "../main";
import "../styles/CreateCandidate.css";
import { toast } from "react-hot-toast";
import { Context } from "../main";

const CreateCandidate = () => {
  let [text, setText] = useState({
    name: "mayur wagh",
    email: "mw@gmail.com",
    mobile_no: "1234657891",
    role: "devloper",
    gender: "male",
    nationality: "indan",
    martial_status: "single",
    post_grad: "YES",
    graduation: "YES",
    secondary_school: "NO",
  });

  const { localToken } = useContext(Context);

  let handleCreate = async () => {
    let config = {
      headers: {
        authorization: `Bearer ${localToken}`,
      },
    };
    try {
      let { data } = await axios.post(`${candidatesUrl}/create`, text, config);

      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  let handleChange = (event) => {
    let { name, value } = event.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  return (
    <div className="main_form_div">
      <form onSubmit={(e) => e.preventDefault()} className="create_form">
        <label>Name *</label>
        <Input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={text.name}
          onChange={handleChange}
        />
        <label>Email *</label>
        <Input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={text.email}
          onChange={handleChange}
        />
        <label>Mobile No *</label>
        <Input
          type="number"
          placeholder="Enter your mobile no"
          name="mobile_no"
          value={text.mobile_no}
          onChange={handleChange}
        />
        <label>Role *</label>
        <Input
          type="text"
          placeholder="Enter your role"
          name="role"
          value={text.role}
          onChange={handleChange}
        />
        <label>Gender *</label>
        <select onChange={handleChange} name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label>Naitonality *</label>
        <Input
          type="text"
          placeholder="Enter your nationality"
          name="nationality"
          value={text.nationality}
          onChange={handleChange}
        />
        <br />
        <label>Martial Status *</label>
        <select onChange={handleChange} name="martial_status">
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
        <br />
        <label>Post Grad *</label>
        <select onChange={handleChange} name="post_grad">
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
        <br />
        <label>Grad *</label>
        <select onChange={handleChange} name="graduation">
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
        <br />
        <label>12th *</label>
        <select onChange={handleChange} name="secondary_school">
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
        <br />
        <input
          type="submit"
          value="Save Profile"
          onClick={handleCreate}
          className="create_input"
          style={{
            border: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            color: "white",
            backgroundColor: "#2B3467",
          }}
        />
      </form>
    </div>
  );
};

export default CreateCandidate;
