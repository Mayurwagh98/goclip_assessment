import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { Context, candidatesUrl } from "../main";
import "../styles/CandidateDetails.css";

const CandidateDetails = () => {
  let { id } = useParams();
  const { localToken } = useContext(Context);
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

      setCandidateDetails(existingCandidate);
      console.log(existingCandidate);
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
        <p>
          Name:- <span>{candidateDetails.name}</span>
        </p>
        <p>
          Email:- <span>{candidateDetails.email}</span>
        </p>
        <p>
          Mobile No:- <span>{candidateDetails.mobile_no}</span>
        </p>
        <p>
          Role:- <span>{candidateDetails.role}</span>
        </p>
        <p>
          Gender:- <span>{candidateDetails.gender}</span>
        </p>
        <p>
          Martial Status:- <span>{candidateDetails.martial_status}</span>
        </p>
        <p>
          Nationality:- <span>{candidateDetails.nationality}</span>
        </p>
        <p>
          LinkedIn:- <span>{candidateDetails.linkedin}</span>
        </p>
      </div>
      <div>
        <p>
          Post Graduation:- <span>{candidateDetails.post_grad}</span>
        </p>
        <p>
          College:- <span>{candidateDetails.post_grad_college_name}</span>
        </p>
        <p>
          City:- <span>{candidateDetails.post_grad_city}</span>
        </p>
        <p>
          Year:- <span>{candidateDetails.post_grad_year}</span>
        </p>
        <p>
          Course:- <span>{candidateDetails.post_grad_course}</span>
        </p>
      </div>
      <div>
        <p>
          Graduation:- <span>{candidateDetails.graduation}</span>
        </p>
        <p>
          College:- <span>{candidateDetails.grad_college_name}</span>
        </p>
        <p>
          City:- <span>{candidateDetails.grad_city}</span>
        </p>
        <p>
          Year:- <span>{candidateDetails.grad_year}</span>
        </p>
        <p>
          Course:- <span>{candidateDetails.grad_course}</span>
        </p>
      </div>
      <div>
        <p>
          Secondary School:- <span>{candidateDetails.secondary_school}</span>
        </p>
        <p>
          College:- <span>{candidateDetails.secondary_school_name}</span>
        </p>
        <p>
          City:- <span>{candidateDetails.secondary_school_city}</span>
        </p>
        <p>
          Year:- <span>{candidateDetails.secondary_school_year}</span>
        </p>
        <p>
          Course:- <span>{candidateDetails.secondary_school_course}</span>
        </p>
      </div>
      <div>
        <p>
          Hobbies:-{" "}
          {candidateDetails.hobbies?.map((item, index) => (
            <span key={index}>{item},</span>
          ))}
        </p>
        <p>
          Skills:-{" "}
          {candidateDetails.skills?.map((item, index) => (
            <span key={index}>{item},</span>
          ))}
        </p>

        <p>
          Preffered Job Location:-{" "}
          <span>{candidateDetails.preffered_job_location}</span>{" "}
        </p>
        <p>
          Certification Name:-{" "}
          <span>{candidateDetails.certification_name}</span>{" "}
        </p>
        <p>
          Certification Organization:-{" "}
          <span>{candidateDetails.certification_org}</span>{" "}
        </p>
        <p>
          Certification Date:-{" "}
          <span>{candidateDetails.certification_date}</span>{" "}
        </p>
      </div>
      <div>
        <p>
          Job Experience:- <span>{candidateDetails.job_exp_company_name}</span>
        </p>
        <p>
          Duration:- <span>{candidateDetails.job_exp_duration}</span>
        </p>
        <p>
          Job Role:- <span>{candidateDetails.job_exp_role}</span>
        </p>
      </div>
    </div>
  );
};

export default CandidateDetails;
