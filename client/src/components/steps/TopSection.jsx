"use client";
import React from "react";
import { Logo } from "../Logo";

export const TopSection = ({ step }) => {
  return (
    <div className="w-[240px] flex flex-col gap-12 items-center ">
      <div className="w-[107.5px] h-10">
        <Logo />
      </div>

      <ul className="steps w-full">
        <li className="step step-primary">Currency</li>
        <li className={`step ${step >= 1 && "step-primary"}`}>Balance</li>
        <li className={`step ${step >= 2 && "step-primary"}`}>Finish</li>
      </ul>
    </div>
  );
};
