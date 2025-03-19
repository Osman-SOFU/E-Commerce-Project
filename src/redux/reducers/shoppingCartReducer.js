const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].count += 1;
        return { ...state, cart: updatedCart };
      } else {
        const newCart = [
          ...state.cart,
          { count: 1, checked: true, product: action.payload },
        ];
        return {
          ...state,
          cart: newCart,
        };
      }
    }
    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );
      return { ...state, cart: updatedCart };
    }
    case "UPDATE_CART_ITEM_COUNT": {
      const updatedCart = state.cart.map((item) =>
        item.product.id === action.payload.productId
          ? { ...item, count: action.payload.count }
          : item
      );
      return { ...state, cart: updatedCart };
    }
    case "TOGGLE_CART_ITEM_SELECTION": {
      const updatedCart = state.cart.map((item) =>
        item.product.id === action.payload
          ? { ...item, checked: !item.checked }
          : item
      );
      return { ...state, cart: updatedCart };
    }
    default:
      return state;
  }
};

export default shoppingCartReducer;
