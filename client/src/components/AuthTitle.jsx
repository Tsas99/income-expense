"use client";
import React from "react";

export const AuthTitle = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center mt-[150px]  ml-[252px] ">
      <div className="flex flex-row items center  gap-[9.5px] ">
        <img src="/logo-g.png" alt="" className="w-[23.85px] h-[23.5px]" />
        <img src="/Geld.png" alt="" className="w-[48.23px] h-[16.69px]" />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center mt-[45px]">
        <div className="text-2xl font-semibold text-[#0F172A]">{title}</div>
        <div className="text-base font-normal text-[#334155]">
          {description}
        </div>
      </div>
    </div>
  );
};
