import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CoffeResponse, ModifyCoffeePayload } from "../../types";
const coffeApi = import.meta.env.VITE_CRUD_API;

export const fetchCoffe = createAsyncThunk("coffe/fetch", async () => {
  const response = await axios.get<CoffeResponse[]>(coffeApi);
  return response.data; // Esto asume que tu API devuelve los datos del usuario y el token en la respuesta
});

export const fetchCoffeById = createAsyncThunk(
  "coffe/fetchById",
  async (id: string) => {
    const response = await axios.get<CoffeResponse>(coffeApi + "/" + id);
    return response.data; // Esto asume que tu API devuelve los datos del usuario y el token en la respuesta
  }
);

export const modifyCoffee = createAsyncThunk(
  "coffee/modify",
  async ({ id, coffeeData }: ModifyCoffeePayload) => {
    try {
      const response = await axios.put<CoffeResponse>(
        `${coffeApi}/${id}`,
        coffeeData
      );
      if (response.status === 200) {
        console.log("modificado");
        return response.data;
      }
    } catch (error) {
      // Manejar errores si la petición falla
      throw new Error("Hubo un error al modificar el café.");
    }
  }
);

export const deleteCoffe = createAsyncThunk("coffe/delete", async (id) => {
  const response = await axios.delete<CoffeResponse>(`coffeApi/${id}`);
  return response.data; // Esto asume que tu API devuelve los datos del usuario y el token en la respuesta
});
