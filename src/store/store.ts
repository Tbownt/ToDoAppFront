import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./auth/authSlice";
import { loginUser } from "./thunks";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [loginUser.reducerPath]: loginUser.reducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(loginUser.middleware),
});

setupListeners(store.dispatch);
