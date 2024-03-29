import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../thunks";

interface authSlice {
  status: string;
  email: string | null;
  accessToken: string | null;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "",
    email: null,
    accessToken: "",
    funca: {},
    loading: false,
    error: null,
  },
  reducers: {
    login: (state: authSlice) => {
      state.email = "andresjose543@gmail.com";
      state.status = "Succesfull";
      state.accessToken = "123abc";
    },
    logout: (state: authSlice) => {
      state.email = "";
      state.status = "Sesion closed";
      state.accessToken = "";
    },
  },
  extraReducers: (builder) => {
    // Agrega los casos para manejar el estado de la solicitud de inicio de sesión
    builder.addMatcher(
      loginUser.endpoints.getUnicorns.matchPending,
      (state) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      loginUser.endpoints.getUnicorns.matchFulfilled,
      (state, action) => {
        state.loading = false;
        state.funca = action.payload;
      }
    );
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice;
