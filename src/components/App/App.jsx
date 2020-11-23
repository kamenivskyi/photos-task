import React from "react";
import { Routes } from "../../routes";
import Header from "../Header";
import PhotosState from "../../context/PhotosState";

import "reset-css/reset.css";
import "./styles.scss";

const App = () => (
  <PhotosState>
    <div className="App">
      <Header />
      <Routes />
    </div>
  </PhotosState>
);

export default App;
