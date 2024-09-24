"use client";

import Link from "next/link";

export const MovePage = ({ texts, href, text }) => {
  return (
    <div className="flex flex-row items-center gap-3 justify-center mt-[40px] ml-[150px]">
      <p className=" items-center">{texts}</p>
      <Link className="text-[#0166FF]" href={href}>
        {text}
      </Link>
    </div>
  );
};
