import React, { useState } from "react";
import CustomeButton from "../../components/CustomeButton";
import Gallery from "../../components/Gallery";
import Pagination from "../../components/Pagination";
import { useAsyncData } from "../../hooks/useAsyncData";
import { fetchStatus, paginationPage } from "../../utils/config";

import "./Home.css";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(5);
  const { data, status } = useAsyncData(
    `/v2/list?page=${page}&limit=${limitPerPage}`
  );

  const handlePageChange = (operation) => () => {
    switch (operation) {
      case paginationPage.next: {
        setPage((page) => page + 1);
        break;
      }
      case paginationPage.previous: {
        if (page > 1) {
          setPage((page) => page - 1);
        }
        break;
      }
      case paginationPage.first: {
        if (page !== 1) {
          setPage(1);
        }
        break;
      }
      default: {
        setPage(1);
        break;
      }
    }
  };

  const { success, pending, failed } = fetchStatus;
  const hasData = data && data.length > 0;
  const noData = status === success && data.length === 0;
  const loading = status === pending;
  const error = status === failed;

  return (
    <main>
      <div className="container">
        {hasData && (
          <>
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
            <Gallery items={data} />
          </>
        )}
        {loading && <p>Loading..</p>}
        {noData && (
          <>
            <p className="warning-message">Photos not found!</p>
            {page !== 1 && (
              <CustomeButton onClick={() => setPage(1)}>
                Back to the first page
              </CustomeButton>
            )}
          </>
        )}
        {error && <p>Error has gone</p>}
      </div>
    </main>
  );
};

export default HomePage;
