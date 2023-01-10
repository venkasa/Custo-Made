import React from "react";
import "./Products.css";
import Tshirt from "../../assets/Tshirt.png";
import Sweeter from "../../assets/Sweeter.png";
import Cap from "../../assets/Cap.png";
import Apron from "../../assets/Apron.png";
import KidsTee from "../../assets/KidsTee.png";
import PoloShirt from "../../assets/PoloShirt.png";
import Joggers from "../../assets/Joggers.png";
import HeadBand from "../../assets/HeadBand.png";
import Jacket from "../../assets/Jacket.png";
import Shorts from "../../assets/Shorts.png";
import Socks from "../../assets/Socks.png";
import Hoodie from "../../assets/Hoodie.png";
import Shirt from "../../assets/Shirt.png";
import Pants from "../../assets/Pants.png";
import Scrub from "../../assets/Scrub.png";
import Gloves from "../../assets/Gloves.png";

const Products = () => {
  return (
    <div className="header section__padding products__main-div" id="products">
      <div className="header-content our__products" id="productCenter">
        <h1 className="gradient__text">Our Products</h1>
      </div>
      <div className="products__layout gradient__text">
        <div className="Products">
          <img className="Products__image-size" src={Tshirt} alt="Tshirt" />
          <h2 className="text__align">T-shirt</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={Sweeter} alt="Sweeter" />
          <h2 className="text__align">Sweeter</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={Cap} alt="Cap" />
          <h2 className="text__align">Cap</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={Apron} alt="Apron" />
          <h2 className="text__align">Apron</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={KidsTee} alt="KidsTee" />
          <h2 className="text__align">KidsTees</h2>
        </div>
        <div className="Products">
          <img
            className="Products__image-size"
            src={PoloShirt}
            alt="PoloShirt"
          />
          <h2 className="text__align">Polo Shirt</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={Joggers} alt="Joggers" />
          <h2 className="text__align">Joggers</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={HeadBand} alt="HeadBand" />
          <h2 className="text__align">HeadBand</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={Jacket} alt="Jacket" />
          <h2 className="text__align">Jacket</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={Shorts} alt="Shorts" />
          <h2 className="text__align">Shorts</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={Socks} alt="Socks" />
          <h2 className="text__align">Socks</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={Hoodie} alt="Hoodie" />
          <h2 className="text__align">Hoodie</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={Shirt} alt="Shirt" />
          <h2 className="text__align">Shirt</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={Pants} alt="Pants" />
          <h2 className="text__align">Pants</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={Scrub} alt="Scrub" />
          <h2 className="text__align">Scrub</h2>
        </div>
        <div className="Products">
          <img className="Products__image-size" src={Gloves} alt="Gloves" />
          <h2 className="text__align">Gloves</h2>
        </div>
      </div>
    </div>
  );
};

export default Products;
