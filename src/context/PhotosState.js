import React, { useEffect, useState } from "react";

import PhotosContext from "./photosContext";

const PhotosState = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (photoObj) => {
    setFavorites([...favorites, photoObj]);
  };

  return (
    <PhotosContext.Provider
      value={{
        handleAddToFavorites,
        favorites,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
};

export default PhotosState;
