import React from "react";

export const StepDescription = (props) => {
  return (
    <div>
      <p className="text-xs font-normal text-[#475569] w-[384px] mt-3">
        {props.description}
      </p>
    </div>
  );
};
