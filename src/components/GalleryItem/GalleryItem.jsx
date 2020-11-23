import React from "react";
import { Link, useHistory } from "react-router-dom";
import { usePhotosContext } from "../../hooks";

import { galleryItemShape } from "../../utils/commonPropTypes";
import CustomButton from "../CustomButton";
import { getSmallImageUrl } from "../../utils/helpers";

import "./GalleryItem.scss";

const GalleryItem = ({ item }) => {
  const history = useHistory();
  const { handleRemoveFromFavorites } = usePhotosContext();
  const isFavoritesPage = history.location.pathname === "/favorites";

  return (
    <article className="gallery__item">
      <Link to={`/photo/${item.id}`}>
        <img className="gallery__image" src={getSmallImageUrl(item)} alt="" />
        {isFavoritesPage && (
          <CustomButton
            variant="primary"
            className="gallery__item--remove"
            label="get more details"
            onClick={(e) => handleRemoveFromFavorites(e, item.id)}
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
