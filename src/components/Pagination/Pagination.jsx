import React from "react";
import PropTypes from "prop-types";

import CustomeButton from "../CustomeButton";
import { paginationPage } from "../../utils/config";
import "./Pagination.css";

const Pagination = ({ onPageChange, currentPage }) => {
  return (
    <div className="pagination">
      <CustomeButton onClick={onPageChange(paginationPage.first)}>
        Back to first
      </CustomeButton>
      <CustomeButton onClick={onPageChange(paginationPage.previous)}>
        Previous
      </CustomeButton>
      <span className="pagination__current-page">Page: {currentPage}</span>
      <CustomeButton onClick={onPageChange(paginationPage.next)}>
        Next
      </CustomeButton>
    </div>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number,
};

export default Pagination;
