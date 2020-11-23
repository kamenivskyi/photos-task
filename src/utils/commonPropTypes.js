import PropTypes from "prop-types";

export const galleryItemShape = PropTypes.shape({
  id: PropTypes.string,
  author: PropTypes.string,
  download_url: PropTypes.string,
  url: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
});
