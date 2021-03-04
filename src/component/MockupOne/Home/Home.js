import React from "react";
import "./Home.css";
import TopSection from "../TopSection/TopSection";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Newsletter from "../Newsletter/Newsletter";
import Shop from "../Shop/Shop";
import About from "../About/About";

const Home = (props) => {
  const { products } = props;
  return (
    <div>
      <TopSection products={products}></TopSection>
      <hr className="section-break" width="100%"></hr>
      <FeaturedProducts products={products}></FeaturedProducts>
      <hr className="section-break" width="100%"></hr>
      <Newsletter></Newsletter>
      <hr className="section-break" width="100%"></hr>
      <Shop products={products}></Shop>
      <hr className="section-break" width="100%"></hr>
      <About></About>
    </div>
  );
};

export default Home;
