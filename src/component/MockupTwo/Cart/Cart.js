import React from "react";
import { connect } from "react-redux";
import { clearCart } from "../../../redux/actions/sylhetShopActions";
import "./Cart.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Summary from "../Summary/Summary";
import CartPageTitle from "../CartPageTitle/CartPageTitle";

const Cart = (props) => {
  const { cart, clearCart } = props;

  return (
    <div id="cart" className="cart-page">
      <CartPageTitle></CartPageTitle>
      <div className="row cart-and-summary-section">
        <div className="col-md-8 cart-component-shopping-cart">
          <h1>Shopping Cart</h1>
          <hr width="100%"></hr>
          <div className="cart-products-details">
            {cart.length > 0 &&
              cart.map((product) => (
                <ShoppingCart key={product.id} product={product}></ShoppingCart>
              ))}
            {cart.length === 0 && (
              <h4 className="text-danger text-center pt-5">
                Your Cart is empty
              </h4>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <h1>Summary</h1>
          <hr width="100%"></hr>
          <Summary></Summary>
        </div>
        <div className="cart-products-section-buttons">
          <div>
            <button className="btn btn-secondary">Next</button>
          </div>
          <div>
            <button className="btn btn-light" onClick={() => clearCart()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  clearCart: clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
