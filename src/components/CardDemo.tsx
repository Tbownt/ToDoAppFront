import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import coffe from "/coffe.png";

export const CardDemo = () => {
  return (
    <div className="row p-5">
      <div className="col-md-3">
        <Card
          style={{
            marginTop: "15px",
          }}
          cover={<img alt="coffe" src={coffe} />}
        >
          <Meta title="Mocaccino" description="This is the note of a coffe" />
        </Card>
      </div>
      <div className="col-md-3">
        <Card
          style={{
            marginTop: "15px",
          }}
          cover={<img alt="coffe" src={coffe} />}
        >
          <Meta title="Cafe latte" description="This is the note of a coffe" />
        </Card>
      </div>
      <div className="col-md-3">
        <Card
          style={{
            marginTop: "15px",
          }}
          cover={<img alt="coffe" src={coffe} />}
        >
          <Meta title="Frappucino" description="This is the note of a coffe" />
        </Card>
      </div>
      <div className="col-md-3">
        <Card
          style={{
            marginTop: "15px",
          }}
          cover={<img alt="coffe" src={coffe} />}
        >
          <Meta title="Expresso" description="This is the note of a coffe" />
        </Card>
      </div>
    </div>
  );
};
