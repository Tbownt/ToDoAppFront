import App from "../App";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { LoginPage } from "../pages/LoginPage";
// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";

export const AppRouter = () => {
  // const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Routes>
      {/* <Route path="/" element={user ? <App /> : <Navigate to="/login" />} /> */}
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
