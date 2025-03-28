// src/redux/reducers/index.js
import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import cardReducer from "./cardReducer";
import uiReducer from "./uiReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  categories: categoryReducer,
  cards: cardReducer,
  ui: uiReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
