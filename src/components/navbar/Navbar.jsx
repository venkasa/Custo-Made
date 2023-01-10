import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
          <p className="logoName">Custo Made</p>
        </div>
        <div className="navbar-links_container">
          <p className="links">
            <a href="#home">Home</a>
          </p>
          <p className="links">
            <a href="#article">About Us</a>
          </p>
          <p className="links">
            <a href="#products">Products</a>
          </p>
          <p className="links">
            <a href="#CTA">Contact us</a>
          </p>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#article">About Us</a>
              </p>
              <p>
                <a href="#products">Products</a>
              </p>
              <p>
                <a href="#CTA">Contact us</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
