import React from "react";
import podllyLogo from "../assets/img/podlly-logo.svg";
import "../assets/css/Header.css";

import HeaderNav from "./HeaderNav";
import Button from "./Button.jsx";

const Header = () => {
  return (
    <header className="header border-bottom">
      <div className="logo-box">
        <img src={podllyLogo} alt="Podlly Logo" className="logo" />
      </div>

      <HeaderNav />
      
      <Button text="Get Matched" type="" />
    </header>
  );
};

export default Header;
