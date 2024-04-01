import { useStateManagment } from "../hooks/useStateManagment";

const CardCoffee = () => {
  const { coffeState } = useStateManagment();

  const coffee = coffeState.coffee;
  return (
    <>
      {coffee ? (
        <div className="">
          {coffee?.map((card) => (
            <div key={card._id}>
              <p>Nombre: {card.coffeName}</p>
              <p>Cantidad: {card.quantity}</p>
              <p>Tamaño: {card.size}</p>
              <p>Nota: {card.note}</p>
              <p>Descafeinado: {card.decaffeinated ? "Si" : "No"}</p>
              <p>Precio: {card.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CardCoffee;
