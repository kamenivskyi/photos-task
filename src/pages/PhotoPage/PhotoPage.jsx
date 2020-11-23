import React from "react";
import { useParams } from "react-router-dom";

import CustomButton from "../../components/CustomButton";
import Preloader from "../../components/Preloader";
import { useAsyncData } from "../../hooks/useAsyncData";
import { usePhotosContext } from "../../hooks";
import { fetchStatus } from "../../utils/config";

import "./PhotoPage.scss";

const PhotoPage = () => {
  const { id } = useParams();
  const { data, status } = useAsyncData(`/id/${id}/info`);
  const { handleAddToFavorites } = usePhotosContext();

  if (!data) {
    return null;
  }

  const { download_url, author, width, height } = data;
  const { pending, success, failed } = fetchStatus;

  return (
    <article className="photo-page">
      <div className="container">
        {status === pending && <Preloader />}
        {status === success && (
          <>
            {download_url && (
              <div className="photo-page__image-wrapper">
                <img className="photo-page__image" src={download_url} alt="" />
              </div>
            )}
            <div className="photo-page__content">
              {author && <p className="photo-page__author">Author: {author}</p>}
              <div className="photo-page__size">
                {width && (
                  <p className="photo-page__size-item">Width: {width}</p>
                )}
                {height && (
                  <p className="photo-page__size-item">height: {height}</p>
                )}
              </div>
              <CustomButton onClick={() => handleAddToFavorites(data)}>
                Add to the favorites
              </CustomButton>
            </div>
          </>
        )}
        {status === failed && <p>Something went wrong!</p>}
      </div>
    </article>
  );
};

export default PhotoPage;
