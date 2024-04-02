import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./authThunks";
import { AuthState } from "../../types";

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(postLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Ha ocurrido un error.";
      });
  },
});

export const { logout } = authSlice.actions;
