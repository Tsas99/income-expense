import React from "react";

export const LendRent = () => {
  return (
    <div className=" flex flex-row w-[1152px] h-[80px] items-center border-b-2 border-[#e2e7ef]   ml-6">
      <div className="flex flex-row mt-5 gap-4 mb-5 ">
        <img src="/lend.png" alt="" className="w-10 h-10 " />
        <div className="flex flex-col">
          <p className="text-base font-normal text-[#000000]">
            Lending & Renting
          </p>
          <p className="text-xs font-normal text-[#6B7280]">3 hours ago</p>
        </div>
      </div>
      <p className="text-base font-semibold text-[#84CC16] ml-[867px]  ">
        -1000₮
      </p>
    </div>
  );
};
