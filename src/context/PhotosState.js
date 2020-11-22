import React, { useEffect, useState } from "react";

import PhotosContext from "./photosContext";

const PhotosState = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (photoObj) => {
    setFavorites([...favorites, photoObj]);
  };

  const handleRemoveFromFavorites = (e, id) => {
    e.preventDefault();
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <PhotosContext.Provider
      value={{
        handleAddToFavorites,
        handleRemoveFromFavorites,
        favorites,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
};

export default PhotosState;
