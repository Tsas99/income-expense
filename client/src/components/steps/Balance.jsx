"use client";

import { API_URL } from "@/utils/constant.js";
import axios from "axios";
import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { Error } from "../Error";
import { BalanceIcon } from "./icons/BalanceIcon";
import { useRouter } from "next/router";
import { useUserContext } from "@/provider/UserProvider";

export const Balance = ({ continueHandler }) => {
  const { token } = useUserContext();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const inputHandler = (event) => {
    event.preventDefault();

    setInput(event.target.value);
  };

  const confirmHandler = async () => {
    if (!input) {
      alert("Enter your balance");
      return;
    }

    try {
      await axios.post(
        `${API_URL}/api/user/balance`,
        {
          balance: input,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
      return;
    }
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
        value={input}
        inputHandler={inputHandler}
        type="text"
        name="balance"
      />
      <div className="text-base font-normal opacity-50 w-[384px]">
        How much cash do you have in your wallet?
      </div>
      <Button
        children={<div className="text-white">Confirm</div>}
        clickHandler={confirmHandler}
        color="blue"
      />
      {error && <Error text={error} />}
    </div>
  );
};
