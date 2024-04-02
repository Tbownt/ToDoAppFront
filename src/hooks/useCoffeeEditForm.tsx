import { EditedCoffe } from "../types";
import { useStateManagment } from "./useStateManagment";
import { editCoffee } from "../store/crud/coffeThunks";
import Swal from "sweetalert2";
import { useState } from "react";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const initialState = {
  id: "",
  coffeeName: "",
  size: "",
  quantity: 0,
  clientName: "",
  note: "",
  decaffeinated: false,
  toppings: [],
};

export const useCoffeeEditForm = () => {
  const [modifiedCoffee, setModifiedCoffee] =
    useState<EditedCoffe>(initialState);

  const { dispatch, navigate } = useStateManagment();

  const handleSelectEditName = (e: string) => {
    setModifiedCoffee({
      ...modifiedCoffee,
      coffeeName: e,
    });
  };

  const handleSelectSizeEdit = (e: string) => {
    setModifiedCoffee({
      ...modifiedCoffee,
      size: e,
    });
  };

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setModifiedCoffee({
      ...modifiedCoffee,
      [name]: value,
    });
  };

  const handleEditQuantity = (e: number) => {
    setModifiedCoffee({
      ...modifiedCoffee,
      quantity: e,
    });
  };

  const handleEditCheckBox = (e: CheckboxChangeEvent) => {
    const { checked } = e.target;
    setModifiedCoffee({
      ...modifiedCoffee,
      decaffeinated: checked,
    });
  };

  const handleEditMultipleSelect = (e: []) => {
    setModifiedCoffee({ ...modifiedCoffee, toppings: e });
  };

  const setCoffeId = (id: string) => {
    setModifiedCoffee({
      ...modifiedCoffee,
      id: id!,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    // Realiza las aserciones aquí antes de enviar los cambios
    if (!modifiedCoffee.quantity || modifiedCoffee.quantity <= 0) {
      // La cantidad debe ser un número positivo
      Swal.fire({
        icon: "error",
        title: "Please provide a valid quantity.",
      });
      return;
    }

    if (!modifiedCoffee.coffeeName) {
      // El nombre del café es obligatorio
      Swal.fire({
        icon: "error",
        title: "Please select a coffee.",
      });
      return;
    }

    if (!modifiedCoffee.clientName.trim()) {
      // El nombre del cliente es obligatorio
      Swal.fire({
        icon: "error",
        title: "Please provide a client name.",
      });
      return;
    }

    if (!modifiedCoffee.size) {
      // El tamaño del café es obligatorio
      Swal.fire({
        icon: "error",
        title: "Please select a size.",
      });
      return;
    }

    // Si todas las aserciones pasan, envía los cambios
    if (modifiedCoffee.id) {
      Swal.fire({
        icon: "success",
        title: "Your order was edited succesfully!",
      });
      navigate("/");
      dispatch(editCoffee(modifiedCoffee));
    }
  };
  return {
    handleSelectEditName,
    handleEditChange,
    handleEditQuantity,
    handleEditCheckBox,
    handleEditMultipleSelect,
    handleSelectSizeEdit,
    setCoffeId,
    handleSubmit,
    modifiedCoffee,
  };
};
