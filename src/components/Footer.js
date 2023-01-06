import React from "react";
import "./Footer.scss";
import { ReactComponent as FooterLogoInstagram } from "../assets/footer-logo-01.svg";
import { ReactComponent as FooterLogoFacebook } from "../assets/footer-logo-02.svg";
import { ReactComponent as FooterLogoTwitter } from "../assets/footer-logo-03.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="left">
        <p className="bigger">Noledge Loss</p>
        <div className="icon-box">
          <div className="icon">
            <FooterLogoInstagram />
          </div>
          <div className="icon">
            <FooterLogoFacebook />
          </div>
          <div className="icon">
            <FooterLogoTwitter />
          </div>
        </div>
      </div>
      <p>All rights reserved © Noledge Loss</p>
    </div>
  );
}

export default Footer;
