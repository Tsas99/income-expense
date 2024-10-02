import { Board } from "@/components/dashboard/Board";
import { Cart } from "@/components/dashboard/Cart";

import { ExpenseChart } from "@/components/dashboard/ExpenseChart";

import { Header } from "@/components/dashboard/Header";
import { IncomeBar } from "@/components/dashboard/IncomeBar";

import { LastRecords } from "@/components/dashboard/LastRecords";
import React from "react";

const Page = () => {
  return (
    <div className="w-[1440px] items-center justify-center  bg-slate-50 ">
      <Header />
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-6">
          <Cart />
          <Board />
        </div>
        <div className="flex flex-row gap-6 ml-[120px] mt-5">
          <IncomeBar />
          <ExpenseChart />
        </div>
        <LastRecords />
      </div>
    </div>
  );
};

export default Page;
