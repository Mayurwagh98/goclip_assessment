import React, { useEffect, useState } from "react";
import axios from "axios";
import { candidatesUrl } from "../main";
import { Table } from "../components/Table";

const CandidateList = () => {
  let [candidates, setCandidates] = useState([]);

  let localToken = JSON.parse(localStorage.getItem("token"));
  let getCandidates = async () => {
    let config = {
      headers: {
        authorization: `Bearer ${localToken}`,
      },
    };
    try {
      let {
        data: { payload },
      } = await axios.get(`${candidatesUrl}`, config);

      // console.log(payload);
      setCandidates(payload);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCandidates();
  }, []);

  if (!localToken) return <Navigate to="/login" />;

  return (
    <>
      <h1>Candidate List</h1>

      <Table candidates={candidates} getCandidates={getCandidates} />
    </>
  );
};

export default CandidateList;
