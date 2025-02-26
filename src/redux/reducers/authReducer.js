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
      console.log("Reducer verifyToken payload:", action.payload); // ✅ Kontrol
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(verifyToken.rejected, (state) => {
      state.user = null;
      state.token = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log("Reducer loginUser payload:", action.payload); // ✅ Kontrol
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
      //localStorage.removeItem("token");
      //localStorage.removeItem("user");
    });
    builder.addCase(loadUserFromLocalStorage.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    });
    builder.addCase(loadUserFromLocalStorage.rejected, (state, action) => {
      state.token = null;
      state.user = null;
    });
  },
});

export default authSlice.reducer;
