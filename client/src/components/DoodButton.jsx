import Link from "next/link";
import React from "react";

export const DoodButton = ({ text, link, linkText }) => {
  return (
    <div className="flex gap-2 justify-center">
      <div>{text}</div>
      <Link className="text-blue-600" href={`/${link}`}>
        {linkText}
      </Link>
    </div>
  );
};
