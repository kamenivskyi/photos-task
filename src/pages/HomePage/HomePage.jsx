import React from "react";

import CustomButton from "../../components/CustomButton";
import Filters from "../../components/Filters/Filters";
import Gallery from "../../components/Gallery";
import Preloader from "../../components/Preloader";
import { usePhotosContext } from "../../hooks";

import { DEFAULT_PAGE, fetchStatus } from "../../utils/config";

const HomePage = () => {
  const { data, status, page, setPage } = usePhotosContext();

  const { success, pending, failed } = fetchStatus;
  const hasData = data && data.length > 0;
  const noData = status === success && data.length === 0;
  const loading = status === pending;
  const error = status === failed;

  return (
    <main>
      <div className="container">
        <h1 className="page-title">Home page</h1>
        <Filters />
        {hasData && <Gallery items={data} />}
        {loading && <Preloader />}
        {noData && (
          <>
            <p className="info-message">Photos not found!</p>
            {page !== 1 && (
              <CustomButton onClick={() => setPage(DEFAULT_PAGE)}>
                Back to the first page
              </CustomButton>
            )}
          </>
        )}
        {error && <p>Error has gone</p>}
      </div>
    </main>
  );
};

export default HomePage;
