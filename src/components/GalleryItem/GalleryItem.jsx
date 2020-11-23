import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import photosContext from "../../context/photosContext";

import { galleryItemShape } from "../../utils/commonPropTypes";
import CustomButton from "../CustomButton";

import "./GalleryItem.scss";

const GalleryItem = ({ item: { download_url, id } }) => {
  const history = useHistory();
  const { handleRemoveFromFavorites } = useContext(photosContext);
  const isFavoritesPage = history.location.pathname === "/favorites";

  return (
    <article className="gallery__item">
      <Link to={`/photo/${id}`}>
        <img className="gallery__image" src={download_url} alt="" />
        {isFavoritesPage && (
          <CustomButton
            variant="primary"
            className="gallery__item--remove"
            label="get more details"
            onClick={(e) => handleRemoveFromFavorites(e, id)}
          >
            Remove
          </CustomButton>
        )}
      </Link>
    </article>
  );
};

GalleryItem.propTypes = {
  item: galleryItemShape,
};

export default GalleryItem;
