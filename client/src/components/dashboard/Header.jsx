import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-row  h-[72px] items-center bg-[#FFFFFF] mt-[22.3px]">
      <div className=" flex flex-row gap-[30.3px] ml-[126.3px] ">
        <img src="/logo-g.png" alt="" className="w-[27.8px] h-[27.4px]" />
        <div className="flex flex-row gap-6 text-base ">
          <div className="font-semibold text-[#0F172A]">Dashboard</div>
          <div className="font-normal text-[#0F172A]">Records</div>
        </div>
      </div>
      <div className="flex flex-row justify-center  gap-6 ml-[811px] ">
        <div className="flex flex-row w-[99px] h-[32px] bg-[#0166FF] rounded-full pl-3 items-center gap-2">
          <img src="/plus-icon.png" alt="" className="w-[15px] h-[15px]" />
          <p className="text-[#FFFFFF]">Record</p>
        </div>
        <div className="avatar  ">
          <div className="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};
