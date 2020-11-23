import React, { useContext } from "react";

import photosContext from "../../context/photosContext";
import Pagination from "../Pagination";

import "./Filters.css";

const Filters = () => {
  const {
    page,
    status,
    limitPerPage,
    handlePageChange,
    setLimitPerPage,
  } = useContext(photosContext);

  return (
    <div className="filters">
      <Pagination
        onPageChange={handlePageChange}
        currentPage={page}
        status={status}
      />
      <label>
        <span className="limit-text">Limit of photos per page: </span>
        <input
          className="limit"
          type="number"
          value={limitPerPage}
          onChange={(e) => setLimitPerPage(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filters;
