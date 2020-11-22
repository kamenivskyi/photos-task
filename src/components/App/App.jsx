import React from "react";
import { Routes } from "../../routes";
import Header from "../Header";
import PhotosState from "../../context/PhotosState";

import "reset-css/reset.css";
import "./styles.css";

const App = () => {
  return (
    <PhotosState>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </PhotosState>
  );
};

export default App;
