import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { candidatesUrl } from "../main";
import "../styles/CandidateDetails.css"

const CandidateDetails = () => {
  let { id } = useParams();
  let localToken = JSON.parse(localStorage.getItem("token"));
  let [candidateDetails, setCandidateDetails] = useState({});

  let getDetails = async () => {
    let config = {
      headers: {
        authorization: `Bearer ${localToken}`,
      },
    };
    try {
      let {
        data: { existingCandidate },
      } = await axios.get(`${candidatesUrl}/${id}`, config);

      console.log(existingCandidate);
      setCandidateDetails(existingCandidate);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="main_details_div">
      <div>
        <p>Name:- {candidateDetails.name}</p>
        <p>Email:- {candidateDetails.email}</p>
        <p>Mobile No:- {candidateDetails.mobile_no}</p>
        <p>Role:- {candidateDetails.role}</p>
        <p>Gender:- {candidateDetails.gender}</p>
        <p>Martial Status:- {candidateDetails.martial_status}</p>
        <p>Nationality:- {candidateDetails.nationality}</p>
      </div>
      <div>
        <p>Post Graduation:- {candidateDetails.post_grad}</p>
        <p>College:- {candidateDetails.post_grad_college_name}</p>
        <p>City:- {candidateDetails.post_grad_city}</p>
        <p>Year:- {candidateDetails.post_grad_year}</p>
        <p>Course:- {candidateDetails.post_grad_course}</p>
      </div>
      <div>
        <p>Graduation:- {candidateDetails.graduation}</p>
        <p>College:- {candidateDetails.grad_college_name}</p>
        <p>City:- {candidateDetails.grad_city}</p>
        <p>Year:- {candidateDetails.grad_year}</p>
        <p>Course:- {candidateDetails.grad_course}</p>
      </div>
      <div>
        <p>Secondary School:- {candidateDetails.secondary_school}</p>
        <p>College:- {candidateDetails.secondary_school_name}</p>
        <p>City:- {candidateDetails.secondary_school_city}</p>
        <p>Year:- {candidateDetails.secondary_school_year}</p>
        <p>Course:- {candidateDetails.secondary_school_course}</p>
      </div>
      <div>
        <p>Job Experience:- {candidateDetails.job_exp_company_name}</p>
        <p>Duration:- {candidateDetails.job_exp_duration}</p>
        <p>Job Role:- {candidateDetails.job_exp_role}</p>
      </div>
    </div>
  );
};

export default CandidateDetails;
