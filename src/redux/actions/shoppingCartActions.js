import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

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

export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAddresses",
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const response = await api.get("/user/address", {
        headers: { Authorization: token },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const setShippingAddress = (address) => ({
  type: "SET_SHIPPING_ADDRESS",
  payload: address,
});

export const setBillingAddress = (address) => ({
  type: "SET_BILLING_ADDRESS",
  payload: address,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});
