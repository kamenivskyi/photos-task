import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => (
  <header className="header">
    <div className="container">
      <nav className="header__navigation">
        <NavLink className="header__link" to="/" exact>
          Home
        </NavLink>
        <NavLink className="header__link" to="/favorites" exact>
          Favorites
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Header;
