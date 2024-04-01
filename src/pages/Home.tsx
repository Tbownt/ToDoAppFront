import { Navbar } from "../components/Navbar";
import coffeImg from "/coffe.png";
import { CardDemo } from "../components/CardDemo";
import { Button } from "antd";
import { CoffeeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCoffe } from "../store/crud/coffeThunks";

// import { AppDispatch, RootState } from "../store/store";

export const Home = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch<AppDispatch>();
  // const state = useSelector((state: RootState) => state.coffe);
  // const { coffe } = state;
  // useEffect(() => {
  //   dispatch(fetchCoffe());
  // }, []);

  // console.log(state);
  return (
    <div className="home-container">
      <Navbar />
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-md-9">
            <h1
              style={{
                color: "#A15C39",
                textAlign: "start",
                fontWeight: "bold",
                backgroundColor: "#FFF",
                borderRadius: "12px",
              }}
              className="text"
            >
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
            type="dashed"
            className="mb-5"
            onClick={() => navigate("/crudCoffe")}
          >
            Make an order
            <CoffeeOutlined />
          </Button>
          <h2 className="font-weight-normal">
            - Check out <small className="font-weight-bold">Our Menu </small>{" "}
            below -
          </h2>
        </div>

        <CardDemo />
      </div>
    </div>
  );
};
