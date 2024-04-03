import { useStateManagment } from "../hooks/useStateManagment";
import { Button } from "antd";

export const NotFound = () => {
  const { navigate } = useStateManagment();
  return (
    <div className="coffePage-container">
      <div className="card-coffe">
        <div className="box-area-not-found d-flex flex-column align-items-center">
          <p className="not-found">That order doesn't exist</p>
          <p className="not-found-subtitle">
            Wanna see what else is on the menu?
          </p>
          <p className="not-found-subtitle">Click down below</p>
          <Button className="order-btn" onClick={() => navigate("/")}>
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};
