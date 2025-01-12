// src/redux/reducers/index.js
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
// Burada farklı reducer'ları birleştiriyoruz
const rootReducer = combineReducers({
  counter: counterReducer,
  // reducer'ları buraya ekleyeceksin
});

export default rootReducer;
