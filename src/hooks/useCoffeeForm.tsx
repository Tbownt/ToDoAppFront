import React, { useState } from "react";
import { CoffeeResponse } from "../types";
import { CheckboxProps } from "antd/es/checkbox";
import Swal from "sweetalert2";
import { useStateManagment } from "./useStateManagment";
import { postCoffee } from "../store/crud/coffeThunks";

const initialState: CoffeeResponse = {
  coffeeName: "",
  clientName: "",
  quantity: 0,
  size: "",
  note: "",
  decaffeinated: false,
  toppings: [],
};

export const useCoffeeForm = () => {
  const { dispatch, navigate } = useStateManagment();
  const [coffeeForm, setCoffeeForm] = useState<CoffeeResponse>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCoffeeForm({
      ...coffeeForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectNameChange = (value: string) => {
    setCoffeeForm({
      ...coffeeForm,
      coffeeName: value,
    });
  };

  const handleSelectSizeChange = (value: string) => {
    setCoffeeForm({
      ...coffeeForm,
      size: value,
    });
  };

  const handleInputNumber = (value: number) => {
    setCoffeeForm({ ...coffeeForm, quantity: value });
  };
  const handleMultipleSelect = (e: []) => {
    setCoffeeForm({ ...coffeeForm, toppings: e });
  };

  const handleCheckBox: CheckboxProps["onChange"] = (e) => {
    const { checked } = e.target;
    setCoffeeForm({ ...coffeeForm, decaffeinated: checked });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    if (
      !coffeeForm.coffeeName ||
      !coffeeForm.clientName ||
      !coffeeForm.quantity ||
      !coffeeForm.size
    ) {
      Swal.fire({
        icon: "error",
        title: "Error submiting your order",
        text: "You must fill in all the fields",
      });
    } else {
      dispatch(postCoffee(coffeeForm));
      setCoffeeForm(initialState);
      navigate("/");
      Swal.fire({
        icon: "success",
        title: "Your order has been saved succesfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const [isDisabled, setIsDisabled] = useState(true);

  const checkFields = () => {
    const { clientName, coffeeName: coffeName, quantity, size } = coffeeForm;
    if (clientName.length < 3 || !coffeName || quantity === 0 || !size) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  return {
    coffeeForm,
    handleChange,
    handleSelectNameChange,
    handleSelectSizeChange,
    handleInputNumber,
    setCoffeeForm,
    handleCheckBox,
    handleMultipleSelect,
    handleSubmit,
    isDisabled,
    checkFields,
  };
};
