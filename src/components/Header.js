import React from "react";
import "./Header.scss";
import { ReactComponent as HeaderSearchIcon } from "../assets/header-search.svg";
import { ReactComponent as MenuLogo01 } from "../assets/menu-logo-01.svg";

function Header() {
  return (
    <div className="Header">
      <div className="middle">
        <div className="main-icon">
          <MenuLogo01 />
          <p className="animate__animated animate__fadeIn bigger">
            NoledgeLoss
          </p>
        </div>
        <div className="search-box">
          <HeaderSearchIcon />
          <input placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}

export default Header;
