import React from "react";
import ProductListContainer from "../components/containers/ProductListContainer.jsx";
import Footer from "../components/pure/footer/Footer";
import Header from "../components/pure/header/Header";
import "./home.css";
const Home = () => {
  return (
    <div className="container">
      <Header />
      <h1 className="our-products"> Our Products </h1> <ProductListContainer />
    </div>
  );
};

export default Home;
