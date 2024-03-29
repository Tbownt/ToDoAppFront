import { Button } from "antd";
import { login } from "../store/auth/authSlice";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={() => dispatch(login())}>Ingresar</Button>
    </>
  );
};
