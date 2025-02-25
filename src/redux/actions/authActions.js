import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import api from "../../services/api.js";
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

// authActions.js
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/login", userData); // Gerçek API çağrısı
      const { token, user } = response.data;

      if (userData.rememberMe) {
        localStorage.setItem("token", token); // Token'ı kaydet
        localStorage.setItem("user", JSON.stringify(user));
      }

      return { user, token };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed.");
    }
  }
);

// authActions.js
export const verifyToken = createAsyncThunk(
  "auth/verifyToken",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/verify"); // Header'da token olacak
      const { user, token } = response.data;

      localStorage.setItem("token", token); // Token yenile
      localStorage.setItem("user", JSON.stringify(user));

      return { user, token };
    } catch (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return rejectWithValue(error.response?.data || "Verification failed.");
    }
  }
);

export const logoutUser = createAction("auth/logoutUser");

export const loadUserFromLocalStorage = createAction(
  "auth/loadUserFromLocalStorage"
);
