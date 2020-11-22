import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import photosContext from "../../context/photosContext";

import { GalleryItemShape } from "../../utils/commonPropTypes";
import CustomeButton from "../CustomeButton";

import "./GalleryItem.css";

const GalleryItem = ({ item: { download_url, id } }) => {
  const history = useHistory();
  const { handleRemoveFromFavorites } = useContext(photosContext);
  const isFavoritesPage = history.location.pathname === "/favorites";

  return (
    <article className="gallery__item">
      <Link to={`/photo/${id}`}>
        <img className="gallery__image" src={download_url} alt="" />
        {isFavoritesPage && (
          <CustomeButton
            variant="primary"
            className="gallery__item-remove"
            onClick={(e) => handleRemoveFromFavorites(e, id)}
          >
            Remove
          </CustomeButton>
        )}
      </Link>
    </article>
  );
};

GalleryItem.propTypes = {
  item: GalleryItemShape,
};

export default GalleryItem;
