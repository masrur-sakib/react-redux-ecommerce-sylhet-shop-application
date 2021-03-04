export const ADD_TO_CART = 'ADD_TO_CART';
export const PRODUCT_QUANTITY_CHANGE = 'PRODUCT_QUANTITY_CHANGE';
export const CLEAR_CART = 'CLEAR_CART';
export const UPDATE_SUMMARY_DATA = 'UPDATE_SUMMARY_DATA';

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        product
    }
};
export const productQuantityChange = (productId, changedQtyValue) => {
    return {
        type: PRODUCT_QUANTITY_CHANGE,
        productId,
        changedQtyValue
    }
};
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
};
export const updateSummaryData = () => {
    return {
        type: UPDATE_SUMMARY_DATA
    }
};