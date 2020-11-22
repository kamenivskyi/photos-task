import React from "react";
import { useParams } from "react-router-dom";
import { useAsyncData } from "../../hooks/useAsyncData";

import "./PhotoPage.css";

const PhotoPage = () => {
  const { id } = useParams();
  const { data, status } = useAsyncData(`/id/${id}/info`);

  if (!data) {
    return null;
  }

  const { download_url, author, width, height } = data;

  console.log(status);

  return (
    <article className="photo-page">
      <div className="container">
        {status === "pending" && <p>Loading..</p>}
        {status === "success" && (
          <>
            <div className="photo-page__image-wrapper">
              <img className="photo-page__image" src={download_url} alt="" />
            </div>
            <p className="photo-page__author">Author: {author}</p>
            <p className="photo-page__size">
              {width && <span>Width: {width}</span>}
              {height && <span>height: {height}</span>}
            </p>
          </>
        )}
        {status === "failed" && <p>Something went wrong!</p>}
      </div>
    </article>
  );
};

export default PhotoPage;