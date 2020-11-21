import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__navigation">
          <NavLink className="header__nav-link" to="/">
            Home
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
