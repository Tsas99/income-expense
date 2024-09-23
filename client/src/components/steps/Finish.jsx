"use client";
import React from "react";
import { MainSection } from "./MainSection";
import { Button } from "../Button";

export const Finish = ({ confirmHandler }) => {
  return (
    <div className="w-[384px] ">
      <MainSection
        src={"finish.png"}
        title={"Good Job!"}
        desc={
          "Your very first account has been created. Now continue to dashboard and start tracking"
        }
      />
      <Button clickHandler={confirmHandler} text={"Go to Dashboard"} />
    </div>
  );
};
