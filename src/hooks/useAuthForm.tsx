import React, { useEffect, useState } from "react";
import { useStateManagment } from "./useStateManagment";
import { postLogin } from "../store/auth/authThunks";
import { UserInterface } from "../types";
import Swal from "sweetalert2";

const initialState = {
  email: "",
  password: "",
};

export const useAuthForm = () => {
  const { dispatch, navigate, authState } = useStateManagment();
  const [user, setUser] = useState<UserInterface>(initialState);
  const { error } = authState;

  useEffect(() => {
    if (error !== null) {
      Swal.fire({ icon: "error", title: `${error}` });
    }
  }, [error]);

  const isValidEmail = (email: string) => {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    if (user === initialState) {
      Swal.fire({
        icon: "error",
        title: "Please fill in all fields",
        text: `${error ? error : "Error"}`,
      });
      return;
    }

    if (user.password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Missing password",
        text: "Please enter your password",
      });
      return;
    }

    if (!isValidEmail(user.email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid email format",
        text: "Please enter a valid email address",
      });
      return;
    }

    dispatch(postLogin(user));
    navigate("/");
  };
  return { handleSubmit, handleChange, user };
};
