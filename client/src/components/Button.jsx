import React from "react";

export const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.clickHandler}
        className="w-[384px] h-[48px] rounded-full bg-[#0166FF] text-[#FFFFFF] text-xl font-normal"
      >
        {props.text}
      </button>
    </div>
  );
};
