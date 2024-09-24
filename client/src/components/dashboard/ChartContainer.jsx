import React from "react";
import { Chart } from "./Chart";

export const ChartContainer = () => {
  return (
    <div>
      <div>
        <div className="w-[588px] h-[284px] rounded-lg bg-[white]">
          <p className="text-base font-semibold mt-4 ml-6">Income - Expense</p>
          <div className="border-b-2 mt-4 "></div>
        </div>
        <Chart />
      </div>
    </div>
  );
};
