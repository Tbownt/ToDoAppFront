import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCoffee,
  fetchCoffee,
  fetchCoffeeById,
  editCoffee,
  postCoffee,
} from "./coffeThunks";
import { CoffeeState } from "../../types";

const initialState: CoffeeState = {
  coffees: [],
  coffeeById: null,
  isLoading: false,
  error: null,
  status: null,
};

export const coffeSlice = createSlice({
  name: "coffe",
  initialState,
  reducers: {
    updateCoffes: (state, { payload }) => {
      state.coffees = state.coffees?.filter((value) => value._id !== payload);
    },
    clearState: (state) => {
      state.coffeeById = null;
    },
  },
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
    builder.addCase(fetchCoffeeById.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message; // Actualiza el estado de error con el mensaje de error
      state.coffeeById = null; // Reinicia el estado de coffeeById en caso de error
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
    builder.addCase(editCoffee.fulfilled, (state, { payload }) => {
      state.status = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(editCoffee.pending, (state) => {
      state.status = "pending";
      state.isLoading = true;
    });
    builder.addCase(editCoffee.rejected, (state, { payload }) => {
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

export const { updateCoffes, clearState } = coffeSlice.actions;
