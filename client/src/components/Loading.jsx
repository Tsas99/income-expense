import React from "react";
import { Logo } from "./Logo";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Logo />
      <span className="loading loading-ring loading-md text-blue-500"></span>
      <div>Түр хүлээнэ үү...</div>
    </div>
  );
};
