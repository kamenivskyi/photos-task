import React, { useState } from "react";
import { useStorage, useAsyncData } from "../hooks";
import { paginationPage } from "../utils/config";

import PhotosContext from "./photosContext";

const PhotosState = ({ children }) => {
  const [page, setPage] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(6);
  const { data, status } = useAsyncData(
    `/v2/list?page=${page}&limit=${limitPerPage}`
  );
  const [favorites, setFavorites] = useStorage({
    key: "photos-app-favorites",
    initialValue: [],
  });

  const handlePageChange = (operation) => () => {
    switch (operation) {
      case paginationPage.next: {
        setPage((page) => page + 1);
        break;
      }
      case paginationPage.previous: {
        if (page > 1) {
          setPage((page) => page - 1);
        }
        break;
      }
      case paginationPage.first: {
        if (page !== 1) {
          setPage(1);
        }
        break;
      }
      default: {
        setPage(1);
        break;
      }
    }
  };

  const handleAddToFavorites = (photoObj) => {
    const hasItem = favorites.find((item) => item.id === photoObj.id);

    if (!hasItem) {
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
        handlePageChange,
        setLimitPerPage,
        limitPerPage,
        page,
        data,
        status,
        favorites,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
};

export default PhotosState;
