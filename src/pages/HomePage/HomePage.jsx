import React, { useState } from "react";
import Gallery from "../../components/Gallery";
import Pagination from "../../components/Pagination";
import { useAsyncData } from "../../hooks/useAsyncData";

import "./Home.css";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(10);
  const { data, status } = useAsyncData(
    `/v2/list?page=${page}&limit=${limitPerPage}`
  );

  const handlePageChange = (operation) => () => {
    switch (operation) {
      case "next": {
        setPage((page) => page + 1);
        break;
      }
      case "previous": {
        if (page > 1) {
          setPage((page) => page - 1);
        }
        break;
      }
      case "first": {
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
  const noData = status === "success" && data.length === 0;
  const loading = status === "pending";
  const error = status === "failed";

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
