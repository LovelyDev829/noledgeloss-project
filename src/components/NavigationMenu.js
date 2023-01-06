import React, { useState } from "react";
import "./NavigationMenu.scss";
import { ReactComponent as MenuLogo01 } from "../assets/menu-logo-01.svg";
import { ReactComponent as MenuLogo02 } from "../assets/menu-logo-02.svg";
import { ReactComponent as MenuLogo03 } from "../assets/menu-logo-03.svg";
import { ReactComponent as MenuLogo04 } from "../assets/menu-logo-04.svg";
import { ReactComponent as MenuLogoLogout } from "../assets/menu-logo-logout.svg";
import "animate.css";

function NavigationMenu() {
  const [menuHoverFlag, setMenuHoverFlag] = useState(false);
  return (
    <div
      className={menuHoverFlag ? "NavigationMenu" : "NavigationMenu mouse-up"}
      onMouseOver={() => {
        setMenuHoverFlag(true);
        console.log("over");
      }}
      onMouseLeave={() => {
        setMenuHoverFlag(false);
        console.log("leave");
      }}
    >
      <div className="button-group">
        <div className="button">
          <MenuLogo01 />
          <p className="animate__animated animate__fadeInLeft bigger">
            NoledgeLoss
          </p>
        </div>
        <div className="button back-color">
          <MenuLogo02 />
          <p className="animate__animated animate__fadeInLeft">Dashboard</p>
        </div>
        <div className="button">
          <MenuLogo03 />
          <p className="animate__animated animate__fadeInLeft">Integrations</p>
        </div>
        <div className="button">
          <MenuLogo04 />
          <p className="animate__animated animate__fadeInLeft">Details</p>
        </div>
      </div>
      <div className="button">
        <MenuLogoLogout />
        <p className="animate__animated animate__fadeInLeft">Log out</p>
      </div>
    </div>
  );
}

export default NavigationMenu;