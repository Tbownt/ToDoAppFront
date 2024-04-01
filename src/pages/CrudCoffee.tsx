import { Button } from "antd";
// import { CardDemo } from "../components/CardDemo";
import { Navbar } from "../components/Navbar";
import { PlusCircleOutlined } from "@ant-design/icons";
import { fetchCoffee } from "../store/crud/coffeThunks";
import { useEffect } from "react";
import CardCoffee from "../components/CardCoffee";
import { useStateManagment } from "../hooks/useStateManagment";

export const CrudCoffee = () => {
  const { dispatch } = useStateManagment();

  useEffect(() => {
    dispatch(fetchCoffee());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">{/* <CardDemo /> */}</div>
        </div>
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-end">
            <Button size="large">
              <PlusCircleOutlined />
            </Button>
          </div>
        </div>
        <CardCoffee />
      </div>
    </>
  );
};
