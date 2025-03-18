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

    default:
      return state;
  }
};

export default shoppingCartReducer;
