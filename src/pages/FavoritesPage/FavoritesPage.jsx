import React, { useContext } from "react";
import Gallery from "../../components/Gallery";
import photosContext from "../../context/photosContext";

const FavoritesPage = () => {
  const { favorites } = useContext(photosContext);

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
