import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => (
  <div className="footer">
    <div className="footer-content section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">Keep in touch</h1>
      </div>

      <div className="footer-links">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="logo" />
            <p className="logoName">Custo Made</p>
          </div>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <a href="#terms">Terms & Conditions </a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <a href="tel:+91-9791823908">+91-9791823908</a>
          <a href="mailto:customademanufacturer@gmail.com">
            customademanufacturer@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <p>@2022 Custo Made. All rights reserved.</p>
      </div>
    </div>
  </div>
);

export default Footer;
