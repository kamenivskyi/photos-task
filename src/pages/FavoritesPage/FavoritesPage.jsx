import React, { useContext } from "react";
import Gallery from "../../components/Gallery";
import photosContext from "../../context/photosContext";

const FavoritesPage = () => {
  const { favorites } = useContext(photosContext);

  return (
    <section className="favorites-page">
      <div className="container">
        <h1 className="page-title">Favorites photos</h1>
        <Gallery items={favorites} />
      </div>
    </section>
  );
};

export default FavoritesPage;
