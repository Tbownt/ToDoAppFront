import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

export const useStateManagment = () => {
  const dispatch = useDispatch<AppDispatch>();
  const coffeState = useSelector((state: RootState) => state.coffee);
  const authState = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  return {
    dispatch,
    coffeState,
    authState,
    navigate,
  };
};
