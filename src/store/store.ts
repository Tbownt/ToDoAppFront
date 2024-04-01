import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authSlice } from "./auth/authSlice";
import { coffeSlice } from "./crud/coffeeSlice";

// ...
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    coffee: coffeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
