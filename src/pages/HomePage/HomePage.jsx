import React, { useState } from "react";
import Gallery from "../../components/Gallery";
import Pagination from "../../components/Pagination";
import { useAsyncData } from "../../hooks/useAsyncData";
import { fetchStatus, paginationPage } from "../../utils/config";

import "./Home.css";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(10);
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

  const hasData = data && data.length > 0;
  const noData = status === fetchStatus.success && data.length === 0;
  const loading = status === fetchStatus.pending;
  const error = status === fetchStatus.failed;

  console.log("render");

  return (
    <main>
      <div className="container">
        {hasData && (
          <>
            <Pagination onPageChange={handlePageChange} currentPage={page} />
            <Gallery items={data} />
          </>
        )}
        {loading && <p>Loading..</p>}
        {noData && (
          <>
            <p className="warning-message">Photos not found!</p>
            {page !== 1 && (
              <button className="custome-button" onClick={() => setPage(1)}>
                Back to the first page
              </button>
            )}
          </>
        )}
        {error && <p>Error has gone</p>}
      </div>
    </main>
  );
};

export default HomePage;
