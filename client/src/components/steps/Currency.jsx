"use client";

import React from "react";
import { MainSection } from "./MainSection";
import { SelectOption } from "./SelectOption";
import { Button } from "../Button";

export const Currency = ({ confirmHandler }) => {
  return (
    <div className="w-[384px]">
      <MainSection
        src={"currency.png"}
        title={"Select base currency"}
        component={<SelectOption />}
        desc={
          "Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one "
        }
      />
      <Button clickHandler={confirmHandler} text={"Confirm"} />
    </div>
  );
};
