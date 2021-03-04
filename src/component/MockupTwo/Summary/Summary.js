import React from 'react';
import { connect } from 'react-redux';
import { updateSummaryData } from '../../../redux/actions/sylhetShopActions';
import './Summary.css';

const Summary = (props) => {
    const {summaryData} = props;

    return (
        <div className="summary-section">
            <input className="coupon-code-input" type="text" placeholder="Enter Coupon Code"></input>
            <hr width="100%"></hr>
            <div className="row">
                <div className="col-md-9">
                    <p>SUBTOTAL</p>
                </div>
                <div className="col-md-3">
                    <p>${summaryData.subTotal}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <p>SHIPPING</p>
                </div>
                <div className="col-md-3">
                    <p>FREE</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <p>TAXES (2%)</p>
                </div>
                <div className="col-md-3">
                    <p>{summaryData.taxes.toFixed(2)}</p>
                </div>
            </div>
            <hr width="100%"></hr>
            <div className="row">
                <div className="col-md-9">
                    <h4>Total</h4>
                </div>
                <div className="col-md-3">
                    <h4>${summaryData.total}</h4>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        summaryData: state.summaryData
    }
};

const mapDispatchToProps = {
    updateSummaryData: updateSummaryData

};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);