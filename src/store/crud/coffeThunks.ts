import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CoffeeResponse, ModifyCoffeePayload, PostCoffee } from "../../types";
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

export const modifyCoffee = createAsyncThunk(
  "coffee/modify",
  async ({ id, coffeeData }: ModifyCoffeePayload) => {
    try {
      const response = await axios.put<CoffeeResponse>(
        `${coffeeApi}/${id}`,
        coffeeData
      );
      if (response.status === 200) {
        console.log("modificado");
        return response.data;
      }
    } catch (error) {
      throw new Error("Hubo un error al modificar el café.");
    }
  }
);

export const deleteCoffee = createAsyncThunk("coffee/delete", async (id) => {
  const response = await axios.delete<CoffeeResponse>(`${coffeeApi}/${id}`);
  return response.status;
});
