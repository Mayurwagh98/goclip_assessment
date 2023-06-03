import { Button, Modal, Tooltip, Input } from "antd";
import { useEffect, useState } from "react";
import { EditFilled } from "@ant-design/icons";
import axios from "axios";
import { candidatesUrl } from "../main";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const EditCandidateProfile = ({ row, getCandidates }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let [updateText, setUpdateText] = useState({
    name: "",
    email: "",
    mobile_no: "",
    role: "",
    gender: "Male",
    nationality: "",
    martial_status: "Single",
    linkedin: "",
    post_grad: "",
    post_grad_college_name: "",
    post_grad_city: "",
    post_grad_year: "",
    post_grad_course: "",
    graduation: "",
    grad_college_name: "",
    grad_city: "",
    grad_year: "",
    grad_course: "",
    secondary_school: "",
    secondary_school_name: "",
    secondary_school_city: "",
    secondary_school_year: "",
    secondary_school_course: "",
    hobbies: "",
    preffered_job_location: "",
    skills: "",
    certification_name: "",
    certification_org: "",
    certification_date: "",
    job_exp_company_name: "",
    job_exp_role: "",
    job_exp_duration: "",
  });

  let [refresh, setRefresh] = useState(false);

  const { localToken } = useContext(Context);

  let updateCandidateProfile = async () => {
    let config = {
      headers: {
        authorization: `Bearer ${localToken}`,
      },
    };
    try {
      let { data } = await axios.patch(
        `${candidatesUrl}/update/${row._id}`,
        updateText,
        config
      );

      toast.success(data.message);
      setRefresh(true);
    } catch (error) {
      console.log(error);
      setRefresh(false);
    }
  };

  useEffect(() => {
    getCandidates();
  }, [refresh]);

  let handleChange = (event) => {
    let { name, value } = event.target;

    setUpdateText({
      ...updateText,
      [name]: value,
    });
  };
  const showModal = () => {
    setUpdateText(row);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    updateCandidateProfile();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Tooltip title="Edit" color="red">
        <Button type="primary" onClick={showModal}>
          <EditFilled />
        </Button>
      </Tooltip>
      <Modal
        title="Update title"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={(e) => e.preventDefault()} className="edit_form">
          <label>Name *</label>
          <Input
            type="text"
            placeholder="title"
            name="name"
            value={updateText.name}
            onChange={handleChange}
          />
          <label>Email *</label>
          <Input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={updateText.email}
            onChange={handleChange}
          />
          <label>Mobile No *</label>
          <Input
            type="number"
            placeholder="Enter your mobile no"
            name="mobile_no"
            value={updateText.mobile_no}
            onChange={handleChange}
          />
          <label>Role *</label>
          <Input
            type="text"
            placeholder="Enter your role"
            name="role"
            value={updateText.role}
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
            value={updateText.nationality}
            onChange={handleChange}
          />
          <br />
          <label>LinkedIn</label>
          <Input
            type="text"
            placeholder="Enter your linkedin"
            name="linkedin"
            value={updateText.linkedin}
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
          <label>Post Grad College</label>
          <Input
            type="text"
            placeholder="Enter your post grad college"
            name="post_grad_college_name"
            value={updateText.post_grad_college_name}
            onChange={handleChange}
          />
          <br />
          <label>Post Grad City</label>
          <Input
            type="text"
            placeholder="Enter your post grad city"
            name="post_grad_city"
            value={updateText.post_grad_city}
            onChange={handleChange}
          />
          <br />
          <label>Post Grad Course</label>
          <Input
            type="text"
            placeholder="Enter your post grad course"
            name="post_grad_course"
            value={updateText.post_grad_course}
            onChange={handleChange}
          />
          <br />
          <label>Post Grad Year</label>
          <Input
            type="text"
            placeholder="Enter your post grad year"
            name="post_grad_year"
            value={updateText.post_grad_year}
            onChange={handleChange}
          />
          <br />
          <label>Grad *</label>
          <select onChange={handleChange} name="graduation">
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
          <br />
          <label>Grad College</label>
          <Input
            type="text"
            placeholder="Enter your grad year"
            name="grad_college_name"
            value={updateText.grad_college_name}
            onChange={handleChange}
          />
          <br />
          <label>Grad City</label>
          <Input
            type="text"
            placeholder="Enter your grad city"
            name="grad_city"
            value={updateText.grad_city}
            onChange={handleChange}
          />
          <br />
          <label>Grad Course</label>
          <Input
            type="text"
            placeholder="Enter your grad course"
            name="grad_course"
            value={updateText.grad_course}
            onChange={handleChange}
          />
          <br />
          <label>Grad Year</label>
          <Input
            type="text"
            placeholder="Enter your grad year"
            name="grad_year"
            value={updateText.grad_year}
            onChange={handleChange}
          />
          <br />
          <label>12th *</label>
          <select onChange={handleChange} name="secondary_school">
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
          <br />
          <label>12th College Name</label>
          <Input
            type="text"
            placeholder="Enter your 12th college"
            name="secondary_college_name"
            value={updateText.secondary_school_name}
            onChange={handleChange}
          />
          <br />
          <label>12th City</label>
          <Input
            type="text"
            placeholder="Enter your 12th city"
            name="secondary_school_city"
            value={updateText.secondary_school_city}
            onChange={handleChange}
          />
          <br />
          <label>12th Course</label>
          <Input
            type="text"
            placeholder="Enter your 12th course"
            name="secondary_school_course"
            value={updateText.secondary_school_course}
            onChange={handleChange}
          />
          <br />
          <label>12th Year</label>
          <Input
            type="text"
            placeholder="Enter your 12th year"
            name="secondary_school_year"
            value={updateText.secondary_school_year}
            onChange={handleChange}
          />
          <br />
          <label>Hobbies</label>
          <Input
            type="text"
            placeholder="Enter your hobbies"
            name="hobbies"
            value={updateText.hobbies}
            onChange={handleChange}
          />
          <br />
          <label>Preffered Job Location</label>
          <Input
            type="text"
            placeholder="Enter your preffered job location"
            name="preffered_job_location"
            value={updateText.preffered_job_location}
            onChange={handleChange}
          />
          <br />
          <label>Certification Name</label>
          <Input
            type="text"
            placeholder="Enter certifiaction name"
            name="certification_name"
            value={updateText.certification_name}
            onChange={handleChange}
          />
          <br />
          <label>Certification Organization</label>
          <Input
            type="text"
            placeholder="Enter your certification organization"
            name="certification_org"
            value={updateText.certification_org}
            onChange={handleChange}
          />
          <br />
          <label>Certification Date</label>
          <Input
            type="text"
            placeholder="Enter your certification date"
            name="certification_date"
            value={updateText.certification_date}
            onChange={handleChange}
          />
          <br />
          <label>Job Exp Company Name</label>
          <Input
            type="text"
            placeholder="Enter your job exp company name"
            name="job_exp_company_name"
            value={updateText.job_exp_company_name}
            onChange={handleChange}
          />
          <br />
          <label>Job Exp Role</label>
          <Input
            type="text"
            placeholder="Enter your job exp company role"
            name="job_exp_company_role"
            value={updateText.job_exp_role}
            onChange={handleChange}
          />
          <br />
          <label>Job Exp Duration</label>
          <Input
            type="text"
            placeholder="Enter your job exp duration"
            name="job_exp_company_duration"
            value={updateText.job_exp_duration}
            onChange={handleChange}
          />
          <br />
        </form>
      </Modal>
    </>
  );
};
export default EditCandidateProfile;
