// src/redux/reducers/index.js
import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  categories: categoryReducer,
  cards: cardReducer,
});

export default rootReducer;
