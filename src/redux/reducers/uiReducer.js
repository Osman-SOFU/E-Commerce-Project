import { TOGGLE_CART } from "../actions/uiActions";

const initialState = {
  cartOpen: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    default:
      return state;
  }
};

export default uiReducer;
