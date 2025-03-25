// filepath: e:\GitHub\E-Commerce-Project\src\redux\reducers\shoppingCartReducer.js
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  payment: JSON.parse(localStorage.getItem("payment")) || {},
  address: JSON.parse(localStorage.getItem("address")) || {},
  addresses: [],
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      let updatedCart;
      if (existingProductIndex !== -1) {
        updatedCart = [...state.cart];
        updatedCart[existingProductIndex].count += 1;
      } else {
        updatedCart = [
          ...state.cart,
          { count: 1, checked: true, product: action.payload },
        ];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }
    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }
    case "UPDATE_CART_ITEM_COUNT": {
      const updatedCart = state.cart.map((item) =>
        item.product.id === action.payload.productId
          ? { ...item, count: action.payload.count }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }
    case "TOGGLE_CART_ITEM_SELECTION": {
      const updatedCart = state.cart.map((item) =>
        item.product.id === action.payload
          ? { ...item, checked: !item.checked }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }
    case "SET_PAYMENT": {
      localStorage.setItem("payment", JSON.stringify(action.payload));
      return { ...state, payment: action.payload };
    }
    case "SET_ADDRESS": {
      localStorage.setItem("address", JSON.stringify(action.payload));
      return { ...state, address: action.payload };
    }
    case "addresses/fetchAddresses/fulfilled": {
      return { ...state, addresses: action.payload };
    }
    case "SET_SHIPPING_ADDRESS": {
      localStorage.setItem("shippingAddress", JSON.stringify(action.payload));
      return { ...state, shippingAddress: action.payload };
    }
    case "SET_BILLING_ADDRESS": {
      localStorage.setItem("billingAddress", JSON.stringify(action.payload));
      return { ...state, billingAddress: action.payload };
    }
    default:
      return state;
  }
};

export default shoppingCartReducer;
