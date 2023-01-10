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
  const [currentButton, setCurrentButton] = useState(1);
  return (
    <div
      className={menuHoverFlag ? "NavigationMenu" : "NavigationMenu mouse-up"}
      onMouseOver={() => {
        setMenuHoverFlag(true);
      }}
      onMouseLeave={() => {
        setMenuHoverFlag(false);
      }}
    >
      <div className="button-group">
        <div className="button">
          <MenuLogo01 />
          <p className="animate__animated animate__fadeIn bigger">
            NoledgeLoss
          </p>
        </div>
        <div
          className={currentButton === 1 ? "button back-color" : "button"}
          onClick={() => {
            if (menuHoverFlag) {
              setCurrentButton(1);
            }
          }}
        >
          <MenuLogo02 className={currentButton === 1 ? "blue" : ""} />
          <p className="animate__animated animate__fadeIn">Dashboard</p>
        </div>
        <div
          className={currentButton === 2 ? "button back-color" : "button"}
          onClick={() => {
            if (menuHoverFlag) {
              setCurrentButton(2);
            }
          }}
        >
          <MenuLogo03 className={currentButton === 2 ? "blue" : ""} />
          <p className="animate__animated animate__fadeIn">Integrations</p>
        </div>
        <div
          className={currentButton === 3 ? "button back-color" : "button"}
          onClick={() => {
            if (menuHoverFlag) {
              setCurrentButton(3);
            }
          }}
        >
          <MenuLogo04 className={currentButton === 3 ? "blue" : ""} />
          <p className="animate__animated animate__fadeIn">Details</p>
        </div>
      </div>
      <div className="button" >
        <MenuLogoLogout />
        <p className="animate__animated animate__fadeIn">Log out</p>
      </div>
    </div>
  );
}

export default NavigationMenu;
