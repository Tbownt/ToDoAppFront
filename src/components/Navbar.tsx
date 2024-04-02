import { Button } from "antd";
import { Link } from "react-router-dom";
import { useStateManagment } from "../hooks/useStateManagment";
import { logout } from "../store/auth/authSlice";
import { LogoutOutlined } from "@ant-design/icons";
import { clearState } from "../store/crud/coffeeSlice";

export const Navbar = () => {
  const { dispatch } = useStateManagment();

  const onLogOut = () => {
    dispatch(clearState());
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
          <Button onClick={onLogOut} danger className="logout-btn">
            <LogoutOutlined />
            Log Out
          </Button>
        </li>
      </ul>
    </nav>
  );
};
