import React from "react";
import { LendRent } from "./LendRent";

export const LastRecords = () => {
  return (
    <div className="w-[1200px] h-[456px] bg-[#FFFFFF] rounded-xl ml-[120px] mt-5">
      <p className="text-base font-semibold mt-4 ml-6">Last Records</p>
      <div className="border-b-2 mt-4 "></div>
      <LendRent />
      <LendRent />
      <LendRent />
      <LendRent />
      <LendRent />
    </div>
  );
};
