import React from "react";

export const Input = (props) => {
  return (
    <div>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.inputHandler}
        className="w-[384px] h-[48px] rounded border-[#D1D5DB] bg-slate-50"
      />
    </div>
  );
};
