import React from "react";
import { connect } from "react-redux";
import "./TopSection.css";

const TopSection = (props) => {
  const { products } = props;
  return (
    <div className="container top-section">
      <h2 className="top-section-tagline">One shop for all of your needs.</h2>
      <hr width="20%"></hr>
      <div className="top-section-image-section">
        <div>
          <img src={products[0].img} alt=""></img>
        </div>
        <div>
          <img src={products[1].img} alt=""></img>
        </div>
        <div>
          <img src={products[2].img} alt=""></img>
        </div>
      </div>
      <a className="btn btn-secondary" href="#shop" role="button">
        Shop Now
      </a>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(TopSection);
