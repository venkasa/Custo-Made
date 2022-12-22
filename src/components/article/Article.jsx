import React from "react";
import "./Article.css";
import articlePicture from "../../assets/articlePicture.jpeg";

const Article = () => (
  <div
    className=" gpt3__header section__padding products__main-div gpt3__header section__padding gpt3__whatgpt3 section__margin"
    id="article"
  >
    <div className="article__layout">
      <div className="gpt3__whatgpt3-feature">
        <img src={articlePicture} alt="cover"></img>
      </div>
      <div className="gpt3__whatgpt3-heading ">
        <h1 className="gradient__text">Custom Clothing</h1>
        <h2 className="gradient__text">
          Wholesale Apparel Printed With Your Logo
        </h2>
        <p>
          Shop our unique collection of custom clothing items printed or
          embroidered with your logo,artwork or exclusive images.At Custo Made
          Enjoy Guaranteed low prices and free shipping on most orders!
        </p>
      </div>
    </div>
  </div>
);

export default Article;
