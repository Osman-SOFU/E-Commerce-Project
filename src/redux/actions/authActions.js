import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import api from "../../services/api.js";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/login", userData);
      console.log("Login API Response:", response.data);

      const { token, name, email, role_id } = response.data;
      const user = { name, email, role_id }; // ✅ user objesi oluştur

      if (userData.rememberMe && token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      }

      return { user, token }; // ✅ user ve token dön
    } catch (error) {
      console.error("Login error:", error.response?.data);
      return rejectWithValue(error.response?.data || "Login failed.");
    }
  }
);

export const verifyToken = createAsyncThunk(
  "auth/verifyToken",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get("/verify", {
        headers: { Authorization: token },
      });

      console.log("Verify API Response:", response.data);

      const { name, email, role_id, token: newToken } = response.data;
      const user = { name, email, role_id }; // ✅ user oluştur

      localStorage.setItem("token", newToken);
      localStorage.setItem("user", JSON.stringify(user));

      return { user, token: newToken };
    } catch (error) {
      console.error("Token verification failed:", error.response?.data);
      return rejectWithValue(error.response?.data || "Verification failed.");
    }
  }
);

export const logoutUser = createAction("auth/logoutUser");

export const loadUserFromLocalStorage = createAsyncThunk(
  "auth/loadUserFromLocalStorage",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      if (token && user) {
        return { token, user };
      } else {
        throw new Error("No user found in local storage");
      }
    } catch (error) {
      return rejectWithValue("Error loading user from local storage");
    }
  }
);
