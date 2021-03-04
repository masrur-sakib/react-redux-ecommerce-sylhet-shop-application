import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/actions/sylhetShopActions";
import "./Shop.css";

const Shop = (props) => {
  const { products, addToCart } = props;
  return (
    <div id="shop" className="container shop-section">
      <div className="grid-area grid-area-1">
        <img src={products[0].img} alt="" />
        <div className="shop-product-details">
          <div>
            <p>{products[0].name}</p>
            <p>$ {products[0].price}</p>
          </div>
          <div>
            {
              <button
                className="btn btn-secondary"
                onClick={() => addToCart(products[0])}
              >
                Add to cart
              </button>
            }
          </div>
        </div>
      </div>
      <div className="grid-area grid-area-2">
        <img src={products[1].img} alt="" />
        <div className="shop-product-details">
          <div>
            <p>{products[1].name}</p>
            <p>$ {products[1].price}</p>
          </div>
          <div>
            {
              <button
                className="btn btn-secondary"
                onClick={() => addToCart(products[1])}
              >
                Add to cart
              </button>
            }
          </div>
        </div>
      </div>
      <div className="grid-area grid-area-3">
        <img src={products[2].img} alt="" />
        <div className="shop-product-details">
          <div>
            <p>{products[2].name}</p>
            <p>$ {products[2].price}</p>
          </div>
          <div>
            {
              <button
                className="btn btn-secondary"
                onClick={() => addToCart(products[2])}
              >
                Add to cart
              </button>
            }
          </div>
        </div>
      </div>
      <div className="grid-area grid-area-4">
        <img src={products[3].img} alt="" />
        <div className="shop-product-details">
          <div>
            <p>{products[3].name}</p>
            <p>$ {products[3].price}</p>
          </div>
          <div>
            {
              <button
                className="btn btn-secondary"
                onClick={() => addToCart(products[3])}
              >
                Add to cart
              </button>
            }
          </div>
        </div>
      </div>
      <div className="grid-area grid-area-5">
        <img src={products[4].img} alt="" />
        <div className="shop-product-details">
          <div>
            <p>{products[4].name}</p>
            <p>$ {products[4].price}</p>
          </div>
          <div>
            {
              <button
                className="btn btn-secondary"
                onClick={() => addToCart(products[4])}
              >
                Add to cart
              </button>
            }
          </div>
        </div>
      </div>
      <div className="grid-area grid-area-6">
        <img src={products[5].img} alt="" />
        <div className="shop-product-details">
          <div>
            <p>{products[5].name}</p>
            <p>$ {products[5].price}</p>
          </div>
          <div>
            {
              <button
                className="btn btn-secondary"
                onClick={() => addToCart(products[5])}
              >
                Add to cart
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
