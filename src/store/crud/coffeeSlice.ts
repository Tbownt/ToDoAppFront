import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCoffee,
  fetchCoffee as fetchCoffee,
  fetchCoffeeById,
  modifyCoffee,
  postCoffee,
} from "./coffeThunks";
import { CoffeeState } from "../../types";

const initialState: CoffeeState = {
  coffees: [],
  coffeeById: {},
  isLoading: false,
  error: null,
  status: null,
};

export const coffeSlice = createSlice({
  name: "coffe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Get coffe
    builder.addCase(fetchCoffee.fulfilled, (state, { payload }) => {
      state.coffees = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchCoffee.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCoffee.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    //Get Coffe By ID
    builder.addCase(fetchCoffeeById.fulfilled, (state, { payload }) => {
      state.coffeeById = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchCoffeeById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCoffeeById.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    //Post coffe
    builder.addCase(postCoffee.fulfilled, (state, { payload }) => {
      state.status = payload;
      (state.isLoading = false), (state.error = null);
    });
    builder.addCase(postCoffee.pending, (state) => {
      state.status = "pending";
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(postCoffee.rejected, (state, { payload }) => {
      state.error = "Your order could not be shipped";
      state.status = payload;
    });

    //Put Coffe
    builder.addCase(modifyCoffee.fulfilled, (state, { payload }) => {
      state.status = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(modifyCoffee.pending, (state) => {
      state.status = "pending";
      state.isLoading = true;
    });
    builder.addCase(modifyCoffee.rejected, (state, { payload }) => {
      state.error = "Your order could not be shipped";
      state.status = payload;
    });

    //Delete coffe
    builder.addCase(deleteCoffee.fulfilled, (state, { payload }) => {
      state.status = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(deleteCoffee.pending, (state) => {
      state.status = "pending";
      state.isLoading = true;
    });
    builder.addCase(deleteCoffee.rejected, (state, { payload }) => {
      state.error = "Your order could not be shipped";
      state.status = payload;
    });
  },
});
