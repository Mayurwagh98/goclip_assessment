import React, { useState, useEffect, useContext } from "react";
import { Button, Modal } from "antd";
import CreateCandidate from "../components/CreateCandidate";
import "../styles/Dashboard.css";
import { Context, usersUrl } from "../main";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    setUser,
    localToken,
    setLoading,
    user,
  } = useContext(Context);
  let navigate = useNavigate();

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

  let getMyProfile = async () => {
    setLoading(true);
    try {
      let config = {
        headers: {
          authorization: `Bearer ${localToken}`,
        },
      };
      let {
        data: { user },
      } = await axios.get(`${usersUrl}/myprofile`, config);

      setUser(user);
      setLoading(false);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return !user ? (
    <h1>Loading...........</h1>
  ) : (
    <>
      <div className="profile_div">
        <p>Name:- {user.name}</p>
        <p>Email:- {user.email}</p>
        <p>Company:- {user.company_name}</p>
        <p>Role:- {user.role}</p>
        <p>Mobile No:- {user.mobile_no}</p>
      </div>
      <div className="new_candidate_and_candidates">
        <Button
          type="primary"
          onClick={showModal}
          className="new_candidate"
          style={{
            display: "block",
            margin: "1rem auto",
            borderRadius: "0.5rem",
            width: "10rem",
            height: "2.5rem",
          }}
        >
          New Candidate
        </Button>
        <Button
          type="primary"
          onClick={() => navigate("/candidatelist")}
          className="new_candidate"
          style={{
            display: "block",
            margin: "1rem auto",
            borderRadius: "0.5rem",
            width: "10rem",
            height: "2.5rem",
          }}
        >
          Candidates
        </Button>
      </div>
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
