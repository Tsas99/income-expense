import { Board } from "@/components/dashboard/Board";
import { Cart } from "@/components/dashboard/Cart";
import { ChartBar } from "@/components/dashboard/ChartBar";
import { ChartPie } from "@/components/dashboard/ChartPie";

import { Header } from "@/components/dashboard/Header";
import { LastRecords } from "@/components/dashboard/LastRecords";
import React from "react";

const page = () => {
  return (
    <div className="w-[1440px] items-center justify-center  bg-slate-50 ">
      <Header />
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-6">
          <Cart />
          <Board />
        </div>
        <div className="flex flex-row gap-6 justify-center">
          <ChartBar />
          {/* <ChartPie /> */}
        </div>
        <LastRecords />
      </div>
    </div>
  );
};

export default page;
