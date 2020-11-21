import React from "react";
import PropTypes from "prop-types";

import "./Gallery.css";

const Gallery = ({ items }) => {
  return (
    <article>
      {items?.map((item) => {
        return (
          <img src={item.download_url} key={item.id} width={500} height={500} />
        );
      })}
    </article>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      download_url: PropTypes.string,
      url: PropTypes.string,
      height: PropTypes.number,
      width: PropTypes.number,
    })
  ),
};

export default Gallery;
