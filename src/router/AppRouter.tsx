import App from "../App";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { LoginPage } from "../pages/LoginPage";
// import { CrudCoffee } from "../pages/CrudCoffee";
import { useStateManagment } from "../hooks/useStateManagment";
import { CoffePage } from "../pages/CoffePage";
import { ModifyCoffee } from "../pages/ModifyCoffee";

export const AppRouter = () => {
  const { authState } = useStateManagment();

  const { user } = authState;

  // if (!user) {
  //   return (
  //     <Routes>
  //       <Route path="/*" element={<LoginPage />} />
  //     </Routes>
  //   );
  // }

  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/crudCoffee" element={<CrudCoffee />} /> */}
      <Route path="/coffee/:id" element={<CoffePage />} />
      <Route path="/coffeeModify/:id" element={<ModifyCoffee />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
