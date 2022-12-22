import React from "react";
import ai from "../../assets/ai.png";
import "./Header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let's Create Your Own Style</h1>
      <p className="header__content">
        We are the celebrated clothing manufacturer and supplier.At Custo Made
        enjoy guaranteed Low Prices and free shipping On most orders!
      </p>
      <button className="button">Request quote</button>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="hoodie" />
    </div>
  </div>
);

export default Header;
