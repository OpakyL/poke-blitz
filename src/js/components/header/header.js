import React from "react";
import { NavLink as Link } from "react-router-dom";

import logo from "../../../assets/img/logo.png";

const Header = () => {
  return (
    <div className="page header">
      <Link className="header__link" to="/" exact={true}>
        <img src={logo} alt="Logo" />
      </Link>
      <Link className="header__link" to="/" exact={true}>
        Home
      </Link>
      <Link className="header__link" to="/list">
        List
      </Link>
      <Link className="header__link" to="/about">
        About
      </Link>
    </div>
  );
};

export default Header;
