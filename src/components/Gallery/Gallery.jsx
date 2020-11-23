import React from "react";
import PropTypes from "prop-types";

import GalleryItem from "../GalleryItem";
import { galleryItemShape } from "../../utils/commonPropTypes";
import "./Gallery.css";

const Gallery = ({ items }) => {
  return (
    <article className="gallery">
      {items?.map((item) => (
        <GalleryItem item={item} key={item.id} />
      ))}
    </article>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(galleryItemShape),
};

export default Gallery;
