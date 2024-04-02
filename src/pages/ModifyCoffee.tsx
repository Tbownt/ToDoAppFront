import { Input, Select, Button, InputNumber, Checkbox } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { coffeeInfo, options, sizeOptions } from "../utils/coffeLabels";
import { coffeeNameOptions } from "../types";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import TextArea from "antd/es/input/TextArea";
import MultipleSelect from "../components/MultipleSelect";

import { useCoffeeEditForm } from "../hooks/useCoffeeEditForm";

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
  console.log(modifiedCoffee);
  useEffect(() => {
    setCoffeId(id!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Modify Coffee</h2>
      <Select
        style={{ width: "100%", marginBottom: "16px" }}
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
      <Input
        placeholder="Client Name"
        prefix={<UserOutlined />}
        value={modifiedCoffee.clientName}
        onChange={(e) => handleEditChange(e)}
        name="clientName"
        style={{ marginBottom: "16px" }}
        required
      />
      <InputNumber
        type="number"
        name="quantity"
        value={modifiedCoffee.quantity}
        min={1}
        onChange={(e) => handleEditQuantity(e!)}
        style={{ marginBottom: "16px" }}
        required
      />
      <Select
        style={{ width: "100%", marginBottom: "16px" }}
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
      <TextArea
        showCount
        maxLength={100}
        onChange={(e) => handleEditChange(e)}
        placeholder="disable resize"
        style={{ height: 120, resize: "none" }}
        value={modifiedCoffee.note}
        name="note"
      />
      <Checkbox
        value={modifiedCoffee.decaffeinated}
        name="decaffeinated"
        onChange={handleEditCheckBox}
      >
        Decaffeinated
      </Checkbox>
      <MultipleSelect
        value={modifiedCoffee.toppings}
        onChange={handleEditMultipleSelect}
        style={{ width: "100%" }}
        options={options}
        placeholder="Select options"
      />
      <Button
        type="primary"
        onClick={(e) => handleSubmit(e)}
        style={{ width: "100%", marginBottom: "16px" }}
      >
        Save Changes
      </Button>
    </div>
  );
};
