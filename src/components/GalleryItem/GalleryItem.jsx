import React from "react";
import { Link, useHistory } from "react-router-dom";
import { GalleryItemShape } from "../../utils/commonPropTypes";

import "./GalleryItem.css";

const GalleryItem = ({ item: { download_url, id } }) => {
  const history = useHistory();
  const isFavoritesPage = history.location.pathname === "/favorites";

  return (
    <article className="gallery__item">
      <Link to={`/photo/${id}`}>
        <img className="gallery__image" src={download_url} alt="" />
        {isFavoritesPage && (
          <button className="gallery__item-remove custome-button">
            Remove
          </button>
        )}
      </Link>
    </article>
  );
};

GalleryItem.propTypes = {
  item: GalleryItemShape,
};

export default GalleryItem;
