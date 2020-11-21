import React from "react";
import { Routes } from "../../routes";
import Header from "../header";

import "reset-css/reset.css";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
};

export default App;
