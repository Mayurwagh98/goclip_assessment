import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context, candidatesUrl } from "../main";
import { Table } from "../components/Table";
import "../styles/CandidateList.css";

const CandidateList = () => {
  let [candidates, setCandidates] = useState([]);
  const { localToken, setIsAuthenticated } = useContext(Context);
  let [search, setSearch] = useState("");

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
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCandidates();
  }, [search]);

  return (
    <>
      <h3 style={{ textAlign: "center", margin: "10px 0 0 0" }}>
        Search Candidate by Name....
      </h3>
      <input
        type="text"
        placeholder="search here"
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />
      <Table
        candidates={candidates}
        getCandidates={getCandidates}
        search={search}
      />
    </>
  );
};

export default CandidateList;
