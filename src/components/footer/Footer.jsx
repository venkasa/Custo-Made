import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Keep in touch</h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__navbar-links_logo">
        <img src={logo} alt="logo" />
        <p className="logoName">Custo Made</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>

        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p></p>
        <p>9791823908</p>
        <p>customademanufacturer@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Custo Made. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
