import MultipleSelect from "./MultipleSelect";
import { Button, Checkbox, Form, Input, InputNumber, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useCoffeeForm } from "../hooks/useCoffeeForm";
import { coffeeNameOptions } from "../types";
import { coffeeInfo, options } from "../utils/coffeLabels";
import { useEffect, useState } from "react";

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
  } = useCoffeeForm();

  const [isDisabled, setIsDisabled] = useState(true);

  const checkFields = () => {
    const { clientName, coffeName, quantity, size } = coffeeForm;
    if (clientName.length < 3 || !coffeName || quantity === 0 || !size) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    checkFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coffeeForm]);

  return (
    <>
      <Form>
        <Select
          style={{ width: 120 }}
          onChange={handleSelectNameChange}
          value={coffeeForm.coffeName}
          defaultValue={"Menu"}
        >
          {coffeeInfo.map((value: coffeeNameOptions) => (
            <Select.Option value={value.name} name="coffeName" key={value.name}>
              {value.name}
            </Select.Option>
          ))}
        </Select>

        <Input
          placeholder="Client Name"
          prefix={<UserOutlined />}
          value={coffeeForm.clientName}
          onChange={(e) => handleChange(e)}
          name="clientName"
          required
        />
        <InputNumber
          type="number"
          name="quantity"
          value={coffeeForm.quantity}
          min={1}
          onChange={(e) => handleInputNumber(e)}
          required
        />
        <Select
          value={coffeeForm.size}
          onChange={(e) => handleSelectSizeChange(e)}
        >
          <Select.Option key="small">Small</Select.Option>
          <Select.Option key="medium">Medium</Select.Option>
          <Select.Option key="Large">Large</Select.Option>
        </Select>
        <TextArea
          showCount
          maxLength={100}
          onChange={(e) => handleChange(e)}
          placeholder="disable resize"
          style={{ height: 120, resize: "none" }}
          value={coffeeForm.note}
          name="note"
        />
        <Checkbox
          value={coffeeForm.decaffeinated}
          name="decaffeinated"
          onChange={handleCheckBox}
        >
          Decaffeinated
        </Checkbox>
        <MultipleSelect
          value={coffeeForm.toppings}
          onChange={handleMultipleSelect}
          style={{ width: "100%" }}
          options={options}
          placeholder="Select options"
        />
        <Button disabled={isDisabled} onClick={(event) => handleSubmit(event)}>
          Create Order
        </Button>
      </Form>
    </>
  );
};
