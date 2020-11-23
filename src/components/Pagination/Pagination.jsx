import React, { useMemo } from "react";
import PropTypes from "prop-types";

import CustomButton from "../CustomButton";
import { DEFAULT_PAGE, fetchStatus, paginationPage } from "../../utils/config";
import "./Pagination.scss";

const Pagination = ({ onPageChange, currentPage, status }) => {
  const { first, next, previous } = paginationPage;
  const isFetching = useMemo(() => status === fetchStatus.pending, [status]);
  const isDefaultPage = currentPage === DEFAULT_PAGE;

  return (
    <div className="pagination">
      <div className="pagination__buttons">
        <CustomButton
          disabled={isFetching || isDefaultPage}
          onClick={onPageChange(first)}
        >
          Back to first
        </CustomButton>
        <CustomButton
          disabled={isFetching || isDefaultPage}
          onClick={onPageChange(previous)}
        >
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
