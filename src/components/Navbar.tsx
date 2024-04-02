import { Button } from "antd";
import { Link } from "react-router-dom";
import { useStateManagment } from "../hooks/useStateManagment";
import { logout } from "../store/auth/authSlice";
import { LogoutOutlined } from "@ant-design/icons";

export const Navbar = () => {
  const { dispatch } = useStateManagment();

  const onLogOut = () => {
    dispatch(logout());
  };
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <Link to={"/"}>
        <img
          src="https://www.svgrepo.com/show/449609/coffe.svg"
          alt="coffe"
          className="navbar-brand"
          width="35"
        />
      </Link>
      <ul className="navbar-nav justify-center">
        <li className="nav-item">
          <Button onClick={onLogOut} danger>
            <LogoutOutlined />
            Log Out
          </Button>
        </li>
      </ul>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      ></div>
    </nav>
  );
};
