import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserInterface } from "../../types";
const loginAPI = import.meta.env.VITE_LOGIN_API;

export const fetchLogin = createAsyncThunk(
  "login/post",
  async ({ email, password }: UserInterface) => {
    const response = await axios.post(loginAPI, { email, password });
    return response.data; // Esto asume que tu API devuelve los datos del usuario y el token en la respuesta
  }
);
