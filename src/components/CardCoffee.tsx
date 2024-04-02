import { Card } from "antd";
import coffeeImg from "/coffee.png";
import { useStateManagment } from "../hooks/useStateManagment";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { useCardMethods } from "../hooks/useCardMethods";

export const CardCoffee = () => {
  const { coffeState } = useStateManagment();

  const { coffees } = coffeState;

  const { deleteCoffeeCard, modifyCoffeePage, showCoffePageById } =
    useCardMethods();

  return (
    <div className="row">
      {coffees!.length > 0
        ? coffees?.map((value) => (
            <div className="col-md-4" key={value._id}>
              <Card
                className="card-coffe-container"
                cover={<img alt="coffe" src={coffeeImg} />}
                actions={[
                  <EyeOutlined
                    key="show"
                    onClick={() => showCoffePageById(value._id!)}
                  />, // Pasar el ID al hacer clic
                  <EditOutlined
                    key="edit"
                    onClick={() => modifyCoffeePage(value._id!)}
                  />,
                  <DeleteOutlined
                    key="delete"
                    className="delete-btn"
                    onClick={() => deleteCoffeeCard(value._id!)}
                  />,
                ]}
              >
                <Meta title={value.coffeeName} description={value.note} />
              </Card>
            </div>
          ))
        : null}
    </div>
  );
};
