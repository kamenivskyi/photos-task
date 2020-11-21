import React from "react";
import { Link } from "react-router-dom";
import { GalleryItemShape } from "../../utils/commonPropTypes";

import "./GalleryItem.css";

const GalleryItem = ({ item: { download_url, id } }) => {
  return (
    <article className="gallery__item">
      <Link to={`/photo/${id}`}>
        <img className="gallery__image" src={download_url} alt="" />
      </Link>
    </article>
  );
};

GalleryItem.propTypes = {
  item: GalleryItemShape,
};

export default GalleryItem;
