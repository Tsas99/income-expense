import React from "react";

export const RecordInput = ({
  type,
  placeholder,
  value,
  inputHandler,
  name,
}) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={inputHandler}
      />
    </div>
  );
};
