import { Card } from "antd";
import { Navbar } from "../components/Navbar";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import coffe from "../../public/coffe.png";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCoffe } from "../store/crud/coffeThunks";

// import { AppDispatch, RootState } from "../store/store";

export const Home = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // const state = useSelector((state: RootState) => state.coffe);
  // const { coffe } = state;
  // useEffect(() => {
  //   dispatch(fetchCoffe());
  // }, []);

  // console.log(state);
  return (
    <div style={{ backgroundColor: "#F0E1C2", minHeight: "100vh" }}>
      <Navbar />
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-9">
            <h1
              style={{
                color: "#A15C39",
                textAlign: "start",
                fontWeight: "bold",
              }}
              className="text"
            >
              Welcome to your Personal CoffeShop, What would you like to order
              today?
            </h1>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center ">
            <img alt="coffe" src={coffe} width="75%" />
          </div>
        </div>
        <h2 className="d-flex justify-content-center font-weight-normal">
          Check out our menu below
        </h2>
        <div className="row m-5">
          <div className="col-md-3">
            <Card
              style={{
                marginTop: "15px",
              }}
              cover={<img alt="coffe" src={coffe} />}
              actions={[
                <EditOutlined key="edit" onClick={() => console.log("hola")} />,
                <DeleteOutlined key="delete" style={{ color: "red" }} />,
              ]}
            >
              <Meta
                title="Mocaccino"
                description="This is the note of a coffe"
              />
            </Card>
          </div>
          <div className="col-md-3">
            <Card
              style={{
                marginTop: "15px",
              }}
              cover={<img alt="coffe" src={coffe} />}
              actions={[
                <EditOutlined key="edit" onClick={() => console.log("hola")} />,
                <DeleteOutlined key="delete" style={{ color: "red" }} />,
              ]}
            >
              <Meta
                title="Mocaccino"
                description="This is the note of a coffe"
              />
            </Card>
          </div>
          <div className="col-md-3">
            <Card
              style={{
                marginTop: "15px",
              }}
              cover={<img alt="coffe" src={coffe} />}
              actions={[
                <EditOutlined key="edit" onClick={() => console.log("hola")} />,
                <DeleteOutlined key="delete" style={{ color: "red" }} />,
              ]}
            >
              <Meta
                title="Mocaccino"
                description="This is the note of a coffe"
              />
            </Card>
          </div>
          <div className="col-md-3">
            <Card
              style={{
                marginTop: "15px",
              }}
              cover={<img alt="coffe" src={coffe} />}
              actions={[
                <EditOutlined key="edit" onClick={() => console.log("hola")} />,
                <DeleteOutlined key="delete" style={{ color: "red" }} />,
              ]}
            >
              <Meta
                title="Mocaccino"
                description="This is the note of a coffe"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
