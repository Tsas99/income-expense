import React from "react";
import { Types } from "./Types";
import { Category } from "./Category";

export const Records = () => {
  return (
    <div className="w-[282px] h-[1080px] border rounded-xl bg-slate-50 mt-6 ml-[120px]">
      <div className="flex flex-col gap-6 mt-6 ml-4">
        <div className="text-2xl font-semibold">Records</div>
        <button className="w-[250px] h-8 rounded-full bg-[#0166FF] text-[#FFFFFF] text-base font-normal">
          +Add
        </button>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-[250px] h-8"
        />
      </div>
      <Types />
      <Category />
    </div>
  );
};
