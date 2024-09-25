import React from "react";

export const Types = () => {
  return (
    <div className="flex flex-col mt-6 ml-4">
      <p className="text-base font-semibold text-[#1F2937]">Types</p>
      <div className="flex flex-col text-base font-normal text-[#1F2937]">
        <div className="flex flex-row gap-1 mt-4 ml-4">
          <input type="radio" name="radio-1" className="radio w-4 h-4 mt-1 " />
          <p>All</p>
        </div>
        <div className="flex flex-row gap-1 mt-4 ml-4">
          <input type="radio" name="radio-1" className="radio w-4 h-4 mt-1  " />
          <p>Income</p>
        </div>
        <div className="flex flex-row gap-1 mt-4 ml-4">
          <input type="radio" name="radio-1" className="radio w-4 h-4 mt-1  " />
          <p>Expense</p>
        </div>
      </div>
    </div>
  );
};
