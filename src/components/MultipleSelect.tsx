import React from "react";
import { Select } from "antd";
import { SelectProps } from "antd/lib/select";
const { Option } = Select;

interface MultipleSelectProps extends SelectProps<any> {
  options: { label: string; value: string }[];
}

const MultipleSelect: React.FC<MultipleSelectProps> = ({
  options,
  ...props
}) => {
  return (
    <Select mode="multiple" {...props}>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default MultipleSelect;
