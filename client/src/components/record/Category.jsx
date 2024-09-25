import React from "react";

export const Category = () => {
  return (
    <div>
      <div className="flex flex-row  mt-8 ml-4">
        <p className="text-base font-semibold text-[#1F2937]">Category</p>
        <p className="text-base font-normal text-[#1F2937] ml-[123px]">Clear</p>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-row mt-5 text-base font-normal text-[#1F2937]  ">
          <div className="flex flex-row gap-2 ml-4 ">
            <img src="/see.png" alt="" className="w-[18.89px] h-[14px] mt-1" />
            <p>Food & Drinks</p>
          </div>
          <img src="/arrow-icon.png" alt="" className="  " />
        </div>
        <div className="flex flex-row mt-5 text-base font-normal text-[#1F2937]  ">
          <div className="flex flex-row gap-2 ml-4 ">
            <img src="/see.png" alt="" className="w-[18.89px] h-[14px] mt-1" />
            <p>Shopping</p>
          </div>
          <img src="/arrow-icon.png" alt="" />
        </div>
      </div>
    </div>
  );
};
