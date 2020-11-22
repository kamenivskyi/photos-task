import React, { useContext } from "react";

import photosContext from "../../context/photosContext";
import Pagination from "../Pagination";

const Filters = () => {
  const { page, limitPerPage, handlePageChange, setLimitPerPage } = useContext(
    photosContext
  );

  return (
    <div className="filters">
      <Pagination onPageChange={handlePageChange} currentPage={page} />
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
