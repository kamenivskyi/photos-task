import React from "react";
import PropTypes from "prop-types";

import "./Pagination.css";

const Pagination = ({ onPageChange, currentPage }) => {
  return (
    <div className="pagination">
      <button
        type="button"
        className="custome-button"
        onClick={onPageChange("first")}
      >
        Back to first
      </button>
      <button
        type="button"
        className="custome-button"
        onClick={onPageChange("previous")}
      >
        Previous
      </button>
      <span className="pagination__page">Page: {currentPage}</span>
      <button
        type="button"
        className="custome-button"
        onClick={onPageChange("next")}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number,
};

export default Pagination;
