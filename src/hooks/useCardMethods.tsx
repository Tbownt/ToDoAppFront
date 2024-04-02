import Swal from "sweetalert2";
import { useStateManagment } from "./useStateManagment";
import { deleteCoffee } from "../store/crud/coffeThunks";
import { updateCoffes } from "../store/crud/coffeeSlice";

export const useCardMethods = () => {
  const { navigate, dispatch } = useStateManagment();
  const showCoffePageById = (id: string) => {
    navigate(`/coffee/${id}`);
  };

  const modifyCoffeePage = (id: string) => {
    navigate(`/coffeeModify/${id}`);
  };

  const deleteCoffeeCard = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Order has been deleted.",
          icon: "success",
        });
        dispatch(updateCoffes(id));
        dispatch(deleteCoffee(id));
      }
    });
  };
  return {
    showCoffePageById,
    modifyCoffeePage,
    deleteCoffeeCard,
  };
};
