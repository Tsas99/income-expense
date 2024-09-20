"use client";

import Link from "next/link";

export const MovePage = ({ texts, href, text }) => {
  return (
    <div className="flex gap-3 justify-center">
      <p>{texts}</p>
      <Link className="text-[#0166FF]" href={href}>
        {text}
      </Link>
    </div>
  );
};
