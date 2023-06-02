import React, { useState } from "react";
import "../styles/Table.css";
import {
  EditFilled,
  DeleteFilled,
  InfoCircleFilled,
} from "@ant-design/icons";

function Table({ candidates }) {
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

  const renderTablecandidates = () => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return candidates.slice(start, end).map((row) => (
      <tr key={row._id}>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>{row.role}</td>
        <td>
          <EditFilled />
        </td>
        <td>
          <DeleteFilled />
        </td>
        <td>
          <InfoCircleFilled />
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
