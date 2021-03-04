import React from "react";
import "./FeaturedProducts.css";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import { connect } from "react-redux";

const FeaturedProducts = (props) => {
  const { products } = props;
  return (
    <div className="container featured-products-section">
      <h1>Featured Products</h1>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src={products[0].img}
                  className="d-block w-100"
                  alt="..."
                ></img>
                <p className="pt-3">{products[0].name}</p>
                <p>${products[0].price}</p>
              </div>
              <div className="col-md-6">
                <img
                  src={products[1].img}
                  className="d-block w-100"
                  alt="..."
                ></img>
                <p className="pt-3">{products[1].name}</p>
                <p>${products[1].price}</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src={products[2].img}
                  className="d-block w-100"
                  alt="..."
                ></img>
                <p className="pt-3">{products[2].name}</p>
                <p>${products[2].price}</p>
              </div>
              <div className="col-md-6">
                <img
                  src={products[3].img}
                  className="d-block w-100"
                  alt="..."
                ></img>
                <p className="pt-3">{products[3].name}</p>
                <p>${products[3].price}</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src={products[4].img}
                  className="d-block w-100"
                  alt="..."
                ></img>
                <p className="pt-3">{products[4].name}</p>
                <p>${products[4].price}</p>
              </div>
              <div className="col-md-6">
                <img
                  src={products[5].img}
                  className="d-block w-100"
                  alt="..."
                ></img>
                <p className="pt-3">{products[5].name}</p>
                <p>${products[5].price}</p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          <GrCaretPrevious className="carousel-previous-next-icon" />
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          <GrCaretNext className="carousel-previous-next-icon" />
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(FeaturedProducts);
