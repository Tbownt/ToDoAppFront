import MultipleSelect from "./MultipleSelect";
import { Button, Checkbox, Form, Input, InputNumber, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useCoffeeForm } from "../hooks/useCoffeeForm";
import { coffeeNameOptions } from "../types";
import { coffeeInfo, options } from "../utils/coffeLabels";
import { useEffect } from "react";
import { Navbar } from "./Navbar";

const { TextArea } = Input;

export const CreateCoffee = () => {
  const {
    coffeeForm,
    handleChange,
    handleSelectNameChange,
    handleInputNumber,
    handleSelectSizeChange,
    handleCheckBox,
    handleMultipleSelect,
    handleSubmit,
    checkFields,
    isDisabled,
  } = useCoffeeForm();

  useEffect(() => {
    checkFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coffeeForm]);

  return (
    <div className="form-container">
      <Navbar />
      <div className="d-flex flex-column align-items-center justify-content-center form">
        <div className="container">
          <div className="row justify-content-center">
            <Form className="form-background">
              <div className="col-md d-flex justify-content-between">
                <header className="form_header">Create an Order</header>{" "}
                <img
                  src="https://www.svgrepo.com/show/449609/coffe.svg"
                  alt="coffe"
                  className="coffee-icon"
                />
              </div>
              <hr />
              <div className="col-md mt-2">
                <label htmlFor={coffeeForm.coffeeName}>Coffe Name: </label>
                <Select
                  className="select"
                  onChange={handleSelectNameChange}
                  value={coffeeForm.coffeeName}
                  placeholder="Menu"
                >
                  {coffeeInfo.map((value: coffeeNameOptions) => (
                    <Select.Option
                      value={value.name}
                      name="coffeName"
                      key={value.name}
                    >
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
                  value={coffeeForm.clientName}
                  onChange={(e) => handleChange(e)}
                  name="clientName"
                  required
                />
              </div>
              <div className="col-md">
                <label htmlFor="quantity">Quantity: </label>
                <InputNumber
                  type="number"
                  name="quantity"
                  value={coffeeForm.quantity}
                  min={1}
                  max={10}
                  onChange={(e) => handleInputNumber(e!)}
                  required
                  className="select"
                />
              </div>
              <div className="col-md">
                <label htmlFor={coffeeForm.size}>Size: </label>
                <Select
                  value={coffeeForm.size}
                  onChange={(e) => handleSelectSizeChange(e)}
                  className="select"
                >
                  <Select.Option key="small">Small</Select.Option>
                  <Select.Option key="medium">Medium</Select.Option>
                  <Select.Option key="Large">Large</Select.Option>
                </Select>
              </div>
              <div className="col-md">
                <label htmlFor="note">Note: </label>
                <TextArea
                  showCount
                  maxLength={100}
                  onChange={(e) => handleChange(e)}
                  placeholder="Note"
                  className="textArea-form"
                  value={coffeeForm.note}
                  name="note"
                />
              </div>
              <div className="col-md mt-2 mb-2">
                <Checkbox
                  value={coffeeForm.decaffeinated}
                  name="decaffeinated"
                  onChange={handleCheckBox}
                >
                  Decaffeinated
                </Checkbox>
              </div>
              <div className="col-md">
                <MultipleSelect
                  value={coffeeForm.toppings}
                  onChange={handleMultipleSelect}
                  options={options}
                  placeholder="Toppings"
                  className="select"
                />
              </div>
              <div className="col-md-6 mt-3 mb-3">
                <Button
                  disabled={isDisabled}
                  onClick={(event) => handleSubmit(event)}
                >
                  Create Order
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
