import React from "react";
import header from "../../../../assets/landing/field.png";
import logo from "../../../../assets/landing/IMG_3697.png";
import "./header.css";
const Header = () => {
  return (
    <header className="header-container">
      <img className="logo" src={logo} />{" "}
      <img className="header-img" src={header} />{" "}
    </header>
  );
};

export default Header;
