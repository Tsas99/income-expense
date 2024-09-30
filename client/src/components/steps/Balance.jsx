"use client";

import { Input } from "../Input";
import { Button } from "../Button";
import { BalanceIcon } from "./icons/BalanceIcon";

export const Balance = ({ continueHandler }) => {
  const clickHandler = () => {
    continueHandler();
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <BalanceIcon />
      <div className="text-2xl font-semibold mt-4">
        Set up your cash Balance
      </div>
      <Input
        placeholder="Balance"
        value={""}
        inputHandler={""}
        type="text"
        name="balance"
      />
      <div className="text-base font-normal opacity-50 w-[384px]">
        How much cash do you have in your wallet?
      </div>
      <Button
        children={<div className="text-white">Confirm</div>}
        clickHandler={clickHandler}
        color="blue"
      />
    </div>
  );
};
