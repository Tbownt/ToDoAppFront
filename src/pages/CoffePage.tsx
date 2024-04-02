import { useEffect } from "react";
import { useStateManagment } from "../hooks/useStateManagment";
import { fetchCoffeeById } from "../store/crud/coffeThunks";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const CoffePage = () => {
  const { dispatch, coffeState } = useStateManagment();

  const { id } = useParams();

  const { coffeeById } = coffeState;

  useEffect(() => {
    dispatch(fetchCoffeeById(id!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <Navbar />
      {coffeeById ? (
        <div>
          <h3>{coffeeById.coffeeName}</h3>
          <p>Quantity: {coffeeById.quantity}</p>
          <p>Size: {coffeeById.size}</p>
          <p>Client Name: {coffeeById.clientName}</p>
          <p>Note: {coffeeById.note}</p>
          <p>Decaffeinated: {coffeeById.decaffeinated ? "Yes" : "No"}</p>
          <p>
            Toppings:{" "}
            {coffeeById.toppings ? coffeeById.toppings : "No toppings"}
          </p>
        </div>
      ) : null}
    </div>
  );
};
