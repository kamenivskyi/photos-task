import React from "react";
import PropTypes from "prop-types";

import { paginationPage } from "../../utils/config";
import "./Pagination.css";

const Pagination = ({ onPageChange, currentPage }) => {
  return (
    <div className="pagination">
      <button
        type="button"
        className="custome-button"
        onClick={onPageChange(paginationPage.first)}
      >
        Back to first
      </button>
      <button
        type="button"
        className="custome-button"
        onClick={onPageChange(paginationPage.previous)}
      >
        Previous
      </button>
      <span className="pagination__page">Page: {currentPage}</span>
      <button
        type="button"
        className="custome-button"
        onClick={onPageChange(paginationPage.next)}
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
