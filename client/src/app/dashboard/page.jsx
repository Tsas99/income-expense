import { Board } from "@/components/dashboard/Board";
import { Cart } from "@/components/dashboard/Cart";
import { ChartContainer } from "@/components/dashboard/ChartContainer";

import { Header } from "@/components/dashboard/Header";
import React from "react";

const page = () => {
  return (
    <div className="w-[1440px] items-center justify-center  bg-slate-50 ">
      <Header />
      <div className="flex flex-col">
        <div className="flex flex-row gap-6">
          <Cart />
          <Board />
        </div>
        <div className="flex flex-row">
          <ChartContainer />
        </div>
      </div>
    </div>
  );
};

export default page;
