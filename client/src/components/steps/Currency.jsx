"use client";

import { API_URL } from "@/utils/constant.js";
import axios from "axios";
import { useUserContext } from "@/provider/UserProvider";
import { useState } from "react";
import { Error } from "../Error";
import { Button } from "../Button";
import { CurrencyIcon } from "./CurrencyIcon";

export const Currency = ({ continueHandler }) => {
  const { token, logOut } = useUserContext();
  const [currency, setCurrency] = useState("");
  const [error, setError] = useState("");

  const selectHandler = (event) => {
    event.preventDefault();

    setCurrency(event.target.value);
  };
  const confirmHandler = async () => {
    console.log("asd");

    if (!currency) {
      alert("Currency songono uu!");
      return;
    }
    try {
      await axios.post(
        `${API_URL}/user/currency`,
        {
          currency: currency,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      if (error.response.data.message.includes("jwt")) {
        logOut();
        return;
      }
      setError(error.response.data.message);
      return;
    }
    continueHandler();
  };
  return (
    <div className="flex flex-col items-center gap-6">
      <CurrencyIcon />
      <div className="text-2xl font-semibold mt-4"> Select base currency </div>

      <select
        onChange={selectHandler}
        className="select select-bordered w-full max-w-xs"
      >
        <option disabled selected defaultValue={""}>
          Choose one
        </option>
        <option value={"MNT"}>MNT - Mongolian Tugrik</option>
        <option value={"USD"}> USD - Usa Dollar </option>
      </select>

      <div className="text-base font-normal opacity-50 w-[384px]">
        Your base currency should be the one you use most often. All transaction
        in other currencies will be calculated based on this one
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
