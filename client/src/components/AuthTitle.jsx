"use client";

import { Logo } from "./Logo";

export const AuthTitle = (props) => {
  return (
    <div>
      <div className="flex flex-row gap-[9.46px] ml-[373.24px] mt-[282.25px] ">
        <Logo />
      </div>
      <div className="text-2xl font-semibold text-[#0F172A] mt-[45.4px] ml-[334px]">
        {props.title}
      </div>
      <div className="text-base font-normal text-[#334155] mt-[8px] ml-[270.5px]">
        {props.description}
      </div>
    </div>
  );
};
