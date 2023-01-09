import React from "react";
import "./Header.scss";
import { ReactComponent as HeaderSearchIcon } from "../assets/header-search.svg";

function Header() {
  return (
    <div className="Header">
      <div className="middle">
        <div className="search-box">
          <HeaderSearchIcon />
          <input placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}

export default Header;
