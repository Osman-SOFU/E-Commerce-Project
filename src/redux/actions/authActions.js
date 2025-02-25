import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

const fakeApiCall = (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        {
          email: "customer@commerce.com",
          password: "123456",
          name: "Customer",
        },
        { email: "store@commerce.com", password: "123456", name: "Store" },
        { email: "admin@commerce.com", password: "123456", name: "Admin" },
      ];

      const user = users.find(
        (u) => u.email === userData.email && u.password === userData.password
      );

      if (user) {
        resolve({ success: true, token: "fake-jwt-token", user });
      } else {
        reject({ success: false, message: "Invalid credentials" });
      }
    }, 1000);
  });
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fakeApiCall(userData);
      if (userData.rememberMe) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
      }
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAction("auth/logoutUser");

export const loadUserFromLocalStorage = createAction(
  "auth/loadUserFromLocalStorage"
);
