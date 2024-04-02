import { Navbar } from "../components/Navbar";
import coffeImg from "/coffee.png";
import { CardCoffee } from "../components/CardCoffee";
import { Button } from "antd";
import { CoffeeOutlined } from "@ant-design/icons";
import { useStateManagment } from "../hooks/useStateManagment";

import { useEffect } from "react";
import { fetchCoffee } from "../store/crud/coffeThunks";
import { clearState } from "../store/crud/coffeeSlice";

export const Home = () => {
  const { navigate, dispatch } = useStateManagment();

  useEffect(() => {
    dispatch(fetchCoffee());
    dispatch(clearState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="container">
        <div className="row align-items-center my-5 home-title">
          <div className="col-md-9">
            <h1 className="h1-title">
              Welcome to your Personal CoffeShop, What would you like to order
              today?
            </h1>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center ">
            <img alt="coffe" src={coffeImg} width="75%" />
          </div>
        </div>

        <div className="d-flex justify-content-center  flex-column align-items-center">
          <Button
            type="default"
            className="mb-5 order-btn"
            onClick={() => navigate("/createCoffee")}
          >
            Make an order
            <CoffeeOutlined />
          </Button>
          <h2 className="menu-title">
            - Check out <small className="small-menu">Our Menu </small> below -
          </h2>
        </div>
        <CardCoffee />
      </div>
    </div>
  );
};
