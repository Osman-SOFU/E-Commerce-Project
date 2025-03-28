import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  logoutUser,
  loadUserFromLocalStorage,
  verifyToken,
} from "../actions/authActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    error: null,
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(verifyToken.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    });
    builder.addCase(verifyToken.rejected, (state, action) => {
      if (action.payload === "User is not verified. Please check your email.") {
        state.error = "Hesabınız doğrulanmamış.";
      } else {
        state.error = action.payload;
        state.loading = false;
      }
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(logoutUser, (state) => {
      console.warn("logoutUser action triggered, clearing all localStorage!");
      state.user = null;
      state.token = null;
      state.loading = false;

      // Tüm localStorage verilerini temizle
      localStorage.clear();
    });
    builder.addCase(loadUserFromLocalStorage.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.loading = false;
    });

    builder.addCase(loadUserFromLocalStorage.rejected, (state, action) => {
      state.token = null;
      state.user = null;
      state.loading = false;
    });
  },
});

export default authSlice.reducer;
