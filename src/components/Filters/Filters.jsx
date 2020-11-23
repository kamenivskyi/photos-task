import React, { useContext } from "react";
import { useDebouncedCallback } from "use-debounce";

import photosContext from "../../context/photosContext";
import { DEFAULT_LIMIT_PER_PAGE } from "../../utils/config";
import Pagination from "../Pagination";

import "./Filters.scss";

const Filters = () => {
  const { page, status, handlePageChange, setLimitPerPage } = useContext(
    photosContext
  );

  const debounced = useDebouncedCallback((value) => {
    setLimitPerPage(value);
  }, 2000);

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
          defaultValue={DEFAULT_LIMIT_PER_PAGE}
          onChange={(e) => debounced.callback(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filters;
