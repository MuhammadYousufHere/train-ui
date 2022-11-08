import React from "react";
import "./input.scss";
const UiInput = ({
  label,
  type = "text",
  onChange,
  value,
  name,
  placeholder,
  id,
}) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default UiInput;
