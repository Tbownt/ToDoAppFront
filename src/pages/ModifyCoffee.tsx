import { Input, Select, Button, InputNumber, Checkbox, Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { coffeeInfo, options, sizeOptions } from "../utils/coffeLabels";
import { coffeeNameOptions } from "../types";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import TextArea from "antd/es/input/TextArea";
import MultipleSelect from "../components/MultipleSelect";

import { useCoffeeEditForm } from "../hooks/useCoffeeEditForm";
import { Navbar } from "../components/Navbar";

export const ModifyCoffee = () => {
  const {
    setCoffeId,
    handleEditChange,
    handleEditCheckBox,
    handleEditMultipleSelect,
    handleEditQuantity,
    handleSelectEditName,
    handleSelectSizeEdit,
    handleSubmit,
    modifiedCoffee,
  } = useCoffeeEditForm();

  const { id } = useParams();

  useEffect(() => {
    setCoffeId(id!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="form-container">
      <Navbar />
      <div className="d-flex flex-column align-items-center justify-content-center form">
        <div className="container">
          <div className="row justify-content-center">
            <Form className="form-background">
              <div className="col-md d-flex justify-content-between">
                <header className="form_header">Modify Coffee</header>{" "}
                <img
                  src="https://www.svgrepo.com/show/449609/coffe.svg"
                  alt="coffe"
                  className="coffee-icon"
                />
              </div>
              <hr />
              <div className="col-md mt-2">
                <label htmlFor="coffeeName">Coffee Name: </label>
                <Select
                  className="select"
                  onChange={handleSelectEditName}
                  value={modifiedCoffee.coffeeName}
                  placeholder="Select Coffee"
                >
                  {coffeeInfo.map((value: coffeeNameOptions) => (
                    <Select.Option value={value.name} key={value.name}>
                      {value.name}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div className="col-md">
                <label htmlFor="clientName">Client Name: </label>
                <Input
                  placeholder="Client Name"
                  prefix={<UserOutlined />}
                  value={modifiedCoffee.clientName}
                  onChange={(e) => handleEditChange(e)}
                  name="clientName"
                  required
                />
              </div>
              <div className="col-md">
                <label htmlFor="quantity">Quantity: </label>
                <InputNumber
                  type="number"
                  name="quantity"
                  value={modifiedCoffee.quantity}
                  min={1}
                  onChange={(e) => handleEditQuantity(e!)}
                  className="select"
                  required
                />
              </div>
              <div className="col-md">
                <label htmlFor="size">Size: </label>
                <Select
                  className="select"
                  value={modifiedCoffee.size}
                  onChange={(value) => handleSelectSizeEdit(value)}
                  placeholder="Select Size"
                >
                  {sizeOptions.map((value) => (
                    <Select.Option value={value.value} key={value.value}>
                      {value.label}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div className="col-md">
                <label htmlFor="note">Note: </label>
                <TextArea
                  showCount
                  maxLength={100}
                  onChange={(e) => handleEditChange(e)}
                  placeholder="disable resize"
                  className="textArea-form"
                  value={modifiedCoffee.note}
                  name="note"
                />
              </div>
              <div className="col-md mt-2 mb-2">
                <Checkbox
                  value={modifiedCoffee.decaffeinated}
                  name="decaffeinated"
                  onChange={handleEditCheckBox}
                >
                  Decaffeinated
                </Checkbox>
              </div>
              <div className="col-md">
                <MultipleSelect
                  value={modifiedCoffee.toppings}
                  onChange={handleEditMultipleSelect}
                  className="select"
                  options={options}
                  placeholder="Select options"
                />
              </div>
              <div className="col-md-6 mt-3 mb-3">
                <Button type="primary" onClick={(e) => handleSubmit(e)}>
                  Save Changes
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
