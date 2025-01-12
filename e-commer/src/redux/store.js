// src/redux/store.js
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Burada 'thunk' default değil, named export kullanılır
import rootReducer from "./reducers"; // Bütün reducer'ların birleşimi

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
