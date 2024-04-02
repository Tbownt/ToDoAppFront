import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserInterface } from "../../types";
const loginAPI = import.meta.env.VITE_LOGIN_API;

export const postLogin = createAsyncThunk(
  "login/post",
  async ({ email, password }: UserInterface) => {
    const response = await axios.post(loginAPI, { email, password });
    if (response.status === 400 || response.status === 404) {
      return `Failed to log in, status ${response.status}`;
    }
    return response.data; // Esto asume que tu API devuelve los datos del usuario y el token en la respuesta
  }
);
