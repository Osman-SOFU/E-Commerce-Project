import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import api from "../../services/api.js";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/login", userData);
      console.log("Login Response:", response.data);

      const { token, name, email, role_id } = response.data;
      const user = { name, email, role_id };

      if (!token) throw new Error("Token not received from API");

      // 🔹 Token ve kullanıcı bilgilerini kontrol et ve kaydet
      try {
        console.log("Token to be stored:", token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        console.log(
          "Stored Token in localStorage:",
          localStorage.getItem("token")
        );
      } catch (e) {
        console.error("localStorage error:", e); // localStorage hatasını kontrol et
      }

      return { user, token };
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
      console.log("Verifying token:", token);

      const response = await api.get("/verify", {
        headers: { Authorization: `Bearer ${token}` }, // 📌 Token burada gönderiliyor
      });

      console.log("Token verification response:", response.data);

      if (!response.data.verified) {
        console.warn("User is not verified.");
        return rejectWithValue(
          "User is not verified. Please check your email."
        );
      }

      return { user: response.data.user, token };
    } catch (error) {
      console.error("Token verification failed:", error.response?.data);
      return rejectWithValue(
        error.response?.data?.message || "Verification failed."
      );
    }
  }
);

export const logoutUser = createAction("auth/logoutUser");

export const loadUserFromLocalStorage = createAsyncThunk(
  "auth/loadUserFromLocalStorage",
  async () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    console.log("Loading user from localStorage:", { token, user });

    if (!token || !user) {
      console.warn("No token found in localStorage, user might be logged out.");
      return { user: null, token: null };
    }

    return { user, token };
  }
);
