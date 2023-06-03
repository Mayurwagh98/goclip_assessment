import React, { useState } from "react";
import "../styles/Table.css";
import { DeleteFilled, InfoCircleFilled } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import EditCandidateProfile from "./EditCandidateProfile";
import { candidatesUrl } from "../main";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../main";

function Table({ candidates, getCandidates }) {
  const { localToken } = useContext(Context);
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const pageNumbers = Math.ceil(candidates.length / rowsPerPage);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };
  let handleDelete = async (row) => {
    let config = {
      headers: {
        authorization: `Bearer ${localToken}`,
      },
    };
    try {
      let { data } = await axios.delete(
        `${candidatesUrl}/delete/${row._id}`,
        config
      );
      getCandidates();
      toast.success(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  const renderTablecandidates = () => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return candidates.slice(start, end).map((row) => (
      <tr key={row._id}>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>{row.role}</td>
        <td>{row.mobile_no}</td>
        <td>
          <EditCandidateProfile row={row} getCandidates={getCandidates} />
        </td>
        <td>
          <Tooltip title="Delete" color="red">
            <Button onClick={() => handleDelete(row)}>
              <DeleteFilled />
            </Button>
          </Tooltip>
        </td>
        <td>
          <Tooltip title="Details" color="red">
            <Button onClick={() => navigate(`/details/${row._id}`)}>
              <InfoCircleFilled />
            </Button>
          </Tooltip>
        </td>
      </tr>
    ));
  };

  const renderPageNumbers = () => {
    const pageList = [];

    for (let i = 1; i <= pageNumbers; i++) {
      pageList.push(
        <button key={i} id={i} onClick={handleClick} className="page_button">
          {i}
        </button>
      );
    }

    return pageList;
  };

  return (
    <>
      <div className="rows_per_page">
        <span>Rows per page:</span>
        <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Mobile No</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>{renderTablecandidates()}</tbody>
        </table>
      </div>
      <div className="pagination">
        <ul>{renderPageNumbers()}</ul>
      </div>
    </>
  );
}

export { Table };
