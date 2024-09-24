import React from "react";

export const IncomeExpense = ({
  title,
  text,
  desc,
  number,
  zurag1,
  zurag2,
}) => {
  return (
    <div className="w-[384px] h-[216px] bg-[white] rounded-xl pl-6">
      <div className="flex flex-row gap-2 ">
        <img src={zurag2} alt="" className="w-2 h-2 mt-6 " />
        <div className="text-base font-normal text-[#0F172A] pt-4">{title}</div>
      </div>

      <div className="border-b-2 mt-4 border-[#E2E8F0] "></div>
      <div className="text-4xl font-semibold text-[#000000] mt-4 ">
        {number}
      </div>
      <div className="text-lg font-normal text-[#64748B] mt-2">{desc}</div>
      <div className="flex flex-row gap-2 bt-4">
        <img src={zurag1} alt="" className="w-5 h-5" />
        <div className="text-lg font-normal text-[#000000]  ">{text}</div>
      </div>
    </div>
  );
};
