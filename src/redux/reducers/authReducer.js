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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(verifyToken.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(verifyToken.rejected, (state) => {
      state.user = null;
      state.token = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(logoutUser, (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    });
    builder.addCase(loadUserFromLocalStorage, (state) => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      if (token && user) {
        state.token = token;
        state.user = user;
      }
    });
  },
});

export default authSlice.reducer;
