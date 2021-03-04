import { createStore } from "redux";
import sylhetShopReducers from "../reducers/sylhetShopReducers";

export const store = createStore(
    sylhetShopReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );