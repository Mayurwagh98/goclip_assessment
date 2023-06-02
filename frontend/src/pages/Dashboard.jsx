import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import CreateCandidate from "../components/CreateCandidate";
import axios from "axios";
import { usersUrl } from "../main";
import "../styles/Dashboard.css";

const Dashboard = () => {
  let [user, setUser] = useState({});

  // -------------- modal -----------
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // user profile
  let getMyProfile = async () => {
    let localToken = JSON.parse(localStorage.getItem("token"));

    let config = {
      headers: {
        authorization: `Bearer ${localToken}`,
      },
    };
    try {
      let {
        data: { user },
      } = await axios.get(`${usersUrl}/myprofile`, config);

      // console.log(user);
      setUser(user);
    } catch (error) {
      console.log(data);
    }
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <>
      <div className="profile_div">
        <p>Name:- {user.name}</p>
        <p>Email:- {user.email}</p>
        <p>Company:- {user.company_name}</p>
        <p>Role:- {user.role}</p>
        <p>Mobile No:- {user.mobile_no}</p>
      </div>
      <Button
        type="primary"
        onClick={showModal}
        className="new_candidate"
        style={{display: "block", margin: "1rem auto" }}
      >
        New Candidate
      </Button>
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CreateCandidate />
      </Modal>
    </>
  );
};

export default Dashboard;
