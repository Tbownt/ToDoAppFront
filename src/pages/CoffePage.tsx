import { useEffect } from "react";
import { useStateManagment } from "../hooks/useStateManagment";
import { fetchCoffeeById } from "../store/crud/coffeThunks";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import coffeeImg from "/coffee.png";

export const CoffePage = () => {
  const { dispatch, coffeState } = useStateManagment();

  const { id } = useParams();

  const { coffeeById } = coffeState;

  useEffect(() => {
    dispatch(fetchCoffeeById(id!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="coffePage-container">
      <Navbar />
      <div className="card-coffe">
        {coffeeById ? (
          <div className="box-area-coffePage d-flex flex-column align-items-center">
            <h3>{coffeeById.coffeeName}</h3>
            <div className="card-info-container">
              <p className="card-properties">
                Quantity: <small>{coffeeById.quantity}</small>
              </p>
              <p className="card-properties">
                Size: <small>{coffeeById.size}</small>
              </p>
              <p className="card-properties">
                Client Name: <small>{coffeeById.clientName}</small>
              </p>
              <p className="card-properties">
                Decaffeinated:
                <small> {coffeeById.decaffeinated ? "Yes" : "No"}</small>
              </p>
              <p className="card-properties">
                Toppings:{" "}
                <small>
                  {coffeeById.toppings.length < 1
                    ? "No Toppings"
                    : coffeeById.toppings.join(", ")}
                </small>
              </p>
              <p className="card-properties">
                Note: <small>{coffeeById.note}</small>
              </p>
            </div>
            <img src={coffeeImg} alt="coffe" className="page-coffeImg" />
            <blockquote> - Life is not the same without coffee- </blockquote>
          </div>
        ) : null}
      </div>
    </div>
  );
};
