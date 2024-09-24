import React from "react";
import { IncomeExpense } from "./IncomeExpense";

export const Board = () => {
  return (
    <div className="">
      <div className="flex flex-row gap-6 mt-8">
        <IncomeExpense
          zurag2={"green.png"}
          title={"Your Income"}
          number={"1,200,000₮"}
          desc={"Your Income Amount"}
          zurag1={"up.png"}
          text={"32% from last month"}
        />
        <IncomeExpense
          zurag2={"blue.png "}
          title={"Total Expenses"}
          number={"1,200,000₮"}
          desc={"Your Income Amount"}
          zurag1={"down.png"}
          text={"32% from last month"}
        />
      </div>
    </div>
  );
};
