import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { Button, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { UserInterface } from "../types";
import { useState } from "react";
import { fetchLogin } from "../store/auth/authThunks";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserInterface>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    if (user) {
      console.log(user);
      dispatch(fetchLogin(user));
      navigate("/");
    }
  };

  return (
    <div className="row p-3 box-bg shadow box-area">
      <div
        className="col-md-6  d-flex justify-content-center align-items-center flex-column"
        style={{
          backgroundColor: "#ead1a8",
          borderRadius: "15px",
        }}
      >
        <div className="d-flex align-items-center flex-column">
          <img
            src="https://www.svgrepo.com/show/449609/coffe.svg"
            alt="coffe"
            className="img-fluid"
            width="35%"
          />
          <p
            className="text-white"
            style={{ fontWeight: "bold", fontSize: "42px" }}
          >
            CoffeShop
          </p>
          <small
            className="text-white text-wrap text-center"
            style={{ fontSize: "16px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </small>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row align-items-center">
          <div className="header-text m-4">
            <p className="text-white font-weight-bold welcome_text">
              Hello Again 👋
            </p>
            <p className="text-white font-weight-bold">
              Welcome to CoffeApp ☕
            </p>
          </div>
          <div className="input-group m-3">
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="email"
              placeholder="Email Addres"
              size="large"
              value={user.email}
              onChange={(event) => handleChange(event)}
              name="email"
            />
          </div>
          <div className="input-group m-3">
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              size="large"
              type="password"
              placeholder="Password"
              onChange={(event) => handleChange(event)}
              value={user.password}
              name="password"
            />
          </div>
          <div className="input-group m-3">
            <Button
              type="primary"
              size="large"
              onClick={(event) => handleSubmit(event)}
              disabled={user.email.length <= 0 ? true : false}
              style={{ color: "white" }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

// const dispatch = useDispatch<AppDispatch>();
// const coffeeId = "66083e2f1492af03e8f10ea4";
// const coffeeData = {
//   name: "moccachino",hite
//   size: "grande",
//   type_of_milk: "normal",
//   type_of_coffee: "negro",
//   note: "soy una nota",
// };

// useEffect(() => {
//   dispatch(modifyCoffee({ id: coffeeId, coffeeData }));
// }, []);
