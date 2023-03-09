import React from "react";
import { Select } from "antd";

const { Option } = Select;

const LangSelect = ({ value, onChange }) => {
  const handleLanguageChange = (value) => {
    onChange(value);
  };

  return (
    <Select value={value} defaultValue={"UZ"} onChange={handleLanguageChange}>
      <Option value="uz">UZ</Option>
      <Option value="ru">RU</Option>
      <Option value="en">EN</Option>
    </Select>
  );
};

export default LangSelect;
