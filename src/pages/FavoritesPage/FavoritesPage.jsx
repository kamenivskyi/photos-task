import React from "react";
import Gallery from "../../components/Gallery";
import { usePhotosContext } from "../../hooks";

const FavoritesPage = () => {
  const { favorites } = usePhotosContext();

  return (
    <section className="favorites-page">
      <div className="container">
        <h1 className="page-title">Favorites photos</h1>
        {favorites.length > 0 ? (
          <Gallery items={favorites} />
        ) : (
          <p className="info-message">There are no favorite photos yet</p>
        )}
      </div>
    </section>
  );
};

export default FavoritesPage;
