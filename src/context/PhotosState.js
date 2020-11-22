import React from "react";
import { useStorage } from "../hooks";

import PhotosContext from "./photosContext";

const PhotosState = ({ children }) => {
  const [favorites, setFavorites] = useStorage({
    key: "photos-app-favorites",
    initialValue: [],
  });

  const handleAddToFavorites = (photoObj) => {
    const isNotUnique = favorites.find((item) => item.id === photoObj.id);

    if (!isNotUnique) {
      setFavorites([...favorites, photoObj]);
    } else {
      alert("The photo is already in the favorites!");
    }
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
