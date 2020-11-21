import React from "react";
import { GalleryItemShape } from "../../utils/commonPropTypes";

import "./GalleryItem.css";

const GalleryItem = ({ item: { download_url } }) => {
  return (
    <article className="gallery__item">
      <img className="gallery__image" src={download_url} alt="" />
    </article>
  );
};

GalleryItem.propTypes = {
  item: GalleryItemShape,
};

export default GalleryItem;
