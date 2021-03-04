import React from 'react';
import { connect } from 'react-redux';
import { productQuantityChange } from '../../../redux/actions/sylhetShopActions';
import './ShoppingCart.css';

const ShoppingCart = (props) => {
    const { id, img, name, description, price, quantity } = props.product;
    const { productQuantityChange } = props;
    return (
        <div className="shopping-cart-section">
            <div className="row cart-products-section">
                <div className="col-md-3">
                    <img src={img} alt=""></img>
                </div>
                <div className="col-md-6">
                    <p className="cart-product-name">{name}</p>
                    <p className="cart-product-description">{description}</p>
                    <p className="cart-product-price">${price}</p>
                </div>
                <div className="col-md-3 product-quantity-input-section">
                    <input className="product-quantity-input" type="number" name="quantity" min="1" defaultValue={quantity}
                    onChange={(e) => {
                        let changedQtyValue = e.target.value;
                        productQuantityChange(id, changedQtyValue)
                    }}
                    ></input>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        cart: state.cart
    }
};

const mapDispatchToProps = {
    productQuantityChange: productQuantityChange
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);