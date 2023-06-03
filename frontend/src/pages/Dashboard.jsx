import React, { useState, useEffect, useContext } from "react";
import { Button, Modal } from "antd";
import CreateCandidate from "../components/CreateCandidate";
import "../styles/Dashboard.css";
import { Navigate } from "react-router-dom";
import { Context } from "../main";

const Dashboard = () => {
  const { isAuthenticated, user, localToken } = useContext(Context);

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

  if (!localToken) return <Navigate to="/login" />;

  window.onload;
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
      <Button
        type="primary"
        onClick={showModal}
        className="new_candidate"
        style={{ display: "block", margin: "1rem auto" }}
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
