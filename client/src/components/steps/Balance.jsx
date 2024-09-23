"use client";
import React from "react";
import { MainSection } from "./MainSection";

import { Input } from "../Input";
import { Button } from "../Button";

export const Balance = ({ confirmHandler }) => {
  return (
    <div className="w-[384px]">
      <MainSection
        src={"balance.png"}
        title={"Set up your cash Balance"}
        component={
          <Input
            type={"text"}
            placeholder={"Email"}
            inputHandler={""}
            name={"Email"}
          />
        }
        desc={"How much cash do you have in your wallet?"}
      />
      <Button clickHandler={confirmHandler} text={"Confirm"} />
    </div>
  );
};
