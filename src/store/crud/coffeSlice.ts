import { createSlice } from "@reduxjs/toolkit";
import { fetchCoffe } from "./coffeThunks";
import { CoffeState } from "../../types";

const initialState: CoffeState = {
  coffe: null,
  isLoading: false,
  error: null,
};

export const coffeSlice = createSlice({
  name: "coffe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoffe.fulfilled, (state, { payload }) => {
      state.coffe = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchCoffe.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCoffe.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    //ToDo Agregar estado de fetchCoffeById
  },
});
