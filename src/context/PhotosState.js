import React, { useCallback, useState } from "react";
import { useStorage, useAsyncData } from "../hooks";
import {
  DEFAULT_LIMIT_PER_PAGE,
  DEFAULT_PAGE,
  paginationPage,
  storageTypes,
} from "../utils/config";

import PhotosContext from "./photosContext";

const PhotosState = ({ children }) => {
  const [page, setPage] = useStorage({
    initialValue: DEFAULT_PAGE,
    storageType: storageTypes.session,
    key: "photos-app-page",
  });
  const [favorites, setFavorites] = useStorage({
    key: "photos-app-favorites",
    initialValue: [],
  });
  const [limitPerPage, setLimitPerPage] = useState(DEFAULT_LIMIT_PER_PAGE);

  const { data, status } = useAsyncData(
    `/v2/list?page=${page}&limit=${limitPerPage}`
  );

  const handlePageChange = useCallback(
    (operation) => () => {
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
    },
    [page, setPage]
  );

  const handleAddToFavorites = useCallback(
    (photoObj) => {
      const hasItem = favorites.find((item) => item.id === photoObj.id);

      if (!hasItem) {
        setFavorites([...favorites, photoObj]);
      } else {
        alert("The photo is already in the favorites!");
      }
    },
    [favorites, setFavorites]
  );

  const handleRemoveFromFavorites = useCallback(
    (e, id) => {
      e.preventDefault();

      const updatedFavorites = favorites.filter((item) => item.id !== id);
      setFavorites(updatedFavorites);
    },
    [favorites, setFavorites]
  );

  return (
    <PhotosContext.Provider
      value={{
        handleAddToFavorites,
        handleRemoveFromFavorites,
        handlePageChange,
        setLimitPerPage,
        limitPerPage,
        setPage,
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
