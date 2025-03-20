import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";
import { loadUserFromLocalStorage } from "./actions/authActions";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(loadUserFromLocalStorage());
console.log("Redux Store Loaded Token:", store.getState().auth.token);

export default store;
