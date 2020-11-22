import React from "react";
import PropTypes from "prop-types";

import CustomButton from "../CustomButton";
import { paginationPage } from "../../utils/config";
import "./Pagination.css";

const Pagination = ({ onPageChange, currentPage }) => {
  return (
    <div className="pagination">
      <CustomButton onClick={onPageChange(paginationPage.first)}>
        Back to first
      </CustomButton>
      <CustomButton onClick={onPageChange(paginationPage.previous)}>
        Previous
      </CustomButton>
      <span className="pagination__current-page">Page: {currentPage}</span>
      <CustomButton onClick={onPageChange(paginationPage.next)}>
        Next
      </CustomButton>
    </div>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number,
};

export default Pagination;
