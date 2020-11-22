import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import photosContext from "../../context/photosContext";
import { useAsyncData } from "../../hooks/useAsyncData";
import { fetchStatus } from "../../utils/config";
import CustomButton from "../../components/CustomButton";

import "./PhotoPage.css";

const PhotoPage = () => {
  const { id } = useParams();
  const { data, status } = useAsyncData(`/id/${id}/info`);
  const { handleAddToFavorites } = useContext(photosContext);

  if (!data) {
    return null;
  }

  const { download_url, author, width, height } = data;
  const { pending, success, failed } = fetchStatus;

  return (
    <article className="photo-page">
      <div className="container">
        {status === pending && <p>Loading..</p>}
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
