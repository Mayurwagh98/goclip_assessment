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
  });

  let [refresh, setRefresh] = useState(false);

  const { isAuthenticated, localToken } =
  useContext(Context);

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
  if (!isAuthenticated) return <Navigate to="/login" />;
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
          <Input
            type="text"
            placeholder="title"
            name="name"
            value={updateText.name}
            onChange={handleChange}
          />
        </form>
      </Modal>
    </>
  );
};
export default EditCandidateProfile;
