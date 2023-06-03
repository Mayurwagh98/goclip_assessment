import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context, candidatesUrl } from "../main";
import { Table } from "../components/Table";
import { Navigate } from "react-router-dom";

const CandidateList = () => {
  let [candidates, setCandidates] = useState([]);
  const { localToken } = useContext(Context);

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

      setCandidates(payload);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <>
      <Table candidates={candidates} getCandidates={getCandidates} />
    </>
  );
};

export default CandidateList;
