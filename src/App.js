import "./App.css";

import { Article, CTA, Footer, Header, Navbar, Products } from "./components";

import React from "react";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Article />
        <Products />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default App;
