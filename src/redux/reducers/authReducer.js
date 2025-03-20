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
    builder.addCase(verifyToken.rejected, (state, action) => {
      console.warn("Token doğrulama başarısız oldu:", action.payload);
      if (action.payload === "User is not verified. Please check your email.") {
        state.error = "Hesabınız doğrulanmamış.";
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(logoutUser, (state) => {
      console.warn("logoutUser action triggered, clearing localStorage!");
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    });

    builder.addCase(loadUserFromLocalStorage.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      console.log(action.payload);
    });
    builder.addCase(loadUserFromLocalStorage.rejected, (state, action) => {
      state.token = null;
      state.user = null;
    });
  },
});

export default authSlice.reducer;
