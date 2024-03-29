import { Route, Routes } from "react-router-dom";
import App from "../App";
import { NotFound } from "../pages/NotFound";
import { LoginPage } from "../pages/LoginPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
