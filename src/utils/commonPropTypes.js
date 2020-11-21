import PropTypes from "prop-types";

export const GalleryItemShape = PropTypes.shape({
  id: PropTypes.string,
  author: PropTypes.string,
  download_url: PropTypes.string,
  url: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
});
