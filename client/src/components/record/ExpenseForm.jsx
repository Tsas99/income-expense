"use client";
import React from "react";
import Choose from "./Choose";
import { Calendar } from "./Calendar";
import { Time } from "./Time";

const ExpenseForm = () => {
  return (
    <div>
      <div className="relative">
        <p className="absolute top-8 left-10">Amount</p>
        <input
          type="text"
          placeholder="₮ 000.00"
          className="textarea m-4 bg-gray-100 focus:outline-none pt-12 textarea-bordered textarea-lg w-full max-w-xs"
        />
      </div>
      <div className="m-4 gap-2 flex flex-col">
        <div>Category</div>
        <Choose />
      </div>
      <div className="flex flex-row justify-between w-[320px] m-4">
        <div className="flex flex-col">
          <p>Date</p>
          <Calendar value={"2024-10-02"} />
        </div>
        <div className=" flex flex-col">
          <p>Time</p>
          <Time value={"4:15 PM"} />
        </div>
      </div>
      <button className="btn m-4 w-[320px] rounded-3xl text-white bg-blue-600 hover:bg-blue-600">
        Add Expense
      </button>
    </div>
  );
};

export default ExpenseForm;
