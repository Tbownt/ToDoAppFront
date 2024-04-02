import { Button, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useAuthForm } from "../hooks/useAuthForm";
import { useStateManagment } from "../hooks/useStateManagment";

const LoginForm = () => {
  const { handleSubmit, handleChange, user } = useAuthForm();
  const { authState } = useStateManagment();

  const { isLoading } = authState;

  return (
    <div className="row p-3 box-bg shadow box-area">
      <div className="col-md-6  d-flex justify-content-center align-items-center flex-column login-background">
        <div className="d-flex align-items-center flex-column">
          <img
            src="https://www.svgrepo.com/show/449609/coffe.svg"
            alt="coffe"
            className="img-fluid"
            width="35%"
          />
          <p className="coffe-title">CoffeShop</p>
          <small className="coffe-subtitle">
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
              loading={isLoading}
              className="login-btn"
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
