import React, { useMemo } from "react";
import PropTypes from "prop-types";

import CustomButton from "../CustomButton";
import { fetchStatus, paginationPage } from "../../utils/config";
import "./Pagination.scss";

const Pagination = ({ onPageChange, currentPage, status }) => {
  const { first, next, previous } = paginationPage;
  const isFetching = useMemo(() => status === fetchStatus.pending, [status]);

  console.log("render");

  return (
    <div className="pagination">
      <div className="pagination__buttons">
        <CustomButton disabled={isFetching} onClick={onPageChange(first)}>
          Back to first
        </CustomButton>
        <CustomButton disabled={isFetching} onClick={onPageChange(previous)}>
          Previous
        </CustomButton>
        <span className="pagination__current-page">Page: {currentPage}</span>
        <CustomButton disabled={isFetching} onClick={onPageChange(next)}>
          Next
        </CustomButton>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  status: PropTypes.string,
  currentPage: PropTypes.number,
};

export default React.memo(Pagination);
