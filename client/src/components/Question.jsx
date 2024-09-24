"use client";

import Link from "next/link";

export const Question = ({ href, text }) => {
  return (
    <div className="flex flex-row items-center mt-[44px] ml-[294px]  gap-[12px] text-base font-normal">
      <h6 className=" text-[#0F172A]">{text}</h6>
      <Link href={`/user/${href}`}>
        <p className="text-[#0166FF]">{href}</p>
      </Link>
    </div>
  );
};
