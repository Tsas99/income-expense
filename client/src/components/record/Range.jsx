import React from "react";

export const Range = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Amount Range</p>
      <div className="flex flex-row gap-4 ">
        <div>
          <input type="text" className="w-[114.5px] h-12 rounded-md" />
        </div>
        <div>
          <input type="text" className="w-[114.5px] h-12 rounded-md" />
        </div>
      </div>
      <div>
        <input
          type="range"
          min={0}
          max="1000"
          value=""
          className="range w-[245px] h-4  range-info"
        />
      </div>
    </div>
  );
};
