export const setCart = (cart) => ({
  type: "SET_CART",
  payload: cart,
});

export const setPayment = (payment) => ({
  type: "SET_PAYMENT",
  payload: payment,
});

export const setAddress = (address) => ({
  type: "SET_ADDRESS",
  payload: address,
});

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});

export const updateCartItemCount = (productId, count) => ({
  type: "UPDATE_CART_ITEM_COUNT",
  payload: { productId, count },
});

export const toggleCartItemSelection = (productId) => ({
  type: "TOGGLE_CART_ITEM_SELECTION",
  payload: productId,
});
