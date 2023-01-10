import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Keep in touch</h1>
    </div>

    <div className="footer-links">
      <div className="navbar-links_logo">
        <img src={logo} alt="logo" />
        <p className="logoName">Custo Made</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>

        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p></p>
        <p>9791823908</p>
        <p>customademanufacturer@gmail.com</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2022 Custo Made. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
