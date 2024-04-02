import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CoffeeResponse, EditedCoffe, PostCoffee } from "../../types";
const coffeeApi = import.meta.env.VITE_CRUD_API;

export const fetchCoffee = createAsyncThunk("coffee/fetch", async () => {
  const response = await axios.get<CoffeeResponse[]>(coffeeApi);
  return response.data;
});

export const fetchCoffeeById = createAsyncThunk(
  "coffee/fetchById",
  async (id: string) => {
    const response = await axios.get<CoffeeResponse>(`${coffeeApi}/${id}`);
    return response.data;
  }
);

export const postCoffee = createAsyncThunk(
  "coffe/Post",
  async (coffePost: PostCoffee) => {
    const response = await axios.post<PostCoffee>(coffeeApi, coffePost);
    return response.data;
  }
);

export const editCoffee = createAsyncThunk(
  "coffees/updateCoffee",
  async (coffeeData: EditedCoffe) => {
    const {
      id,
      clientName,
      coffeeName,
      quantity,
      size,
      decaffeinated,
      note,
      toppings,
    } = coffeeData;
    const data = {
      clientName,
      coffeeName,
      quantity,
      size,
      decaffeinated,
      note,
      toppings,
    };
    const response = await axios.put<EditedCoffe>(`${coffeeApi}/${id}`, data);
    return response.data;
  }
);

export const deleteCoffee = createAsyncThunk(
  "coffee/delete",
  async (id: string) => {
    const response = await axios.delete(`${coffeeApi}/${id}`);
    return response.status;
  }
);
