"use client";
import React from "react";
import { MainSection } from "./MainSection";
import { Button } from "../Button";
import { FinishIcon } from "./icons/FinishIcon";

export const Finish = ({ continueHandler }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <FinishIcon />
      <div className="text-2xl font-semibold mt-4">Good Job!</div>
      <div className="text-base font-normal opacity-50 w-[384px]">
        Your very first account has been created. Now continue to dashboard and
        start tracking
      </div>
      <Button
        children={<div className="text-white">Go to Dashboard</div>}
        clickHandler={continueHandler}
        color="blue"
      />
    </div>
  );
};
