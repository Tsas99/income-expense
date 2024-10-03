"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export const Cart = () => {
  //  backendruuu hand
  // irsen datag stated usetate
  const [balance, setBalance] = useState();
  const token = window.localStorage.getItem("token");
  const balanceHandler = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/user/balance`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBalance(data);
  };
  useEffect(() => {
    if (token) {
      balanceHandler();
    }
  });

  return (
    <div>
      <div className="relative">
        <img
          src="/cart.png "
          alt=""
          className=" w-[384.12px] h-[219.66px] mt-[31.91px] ml-[120px] "
        />
        <div className=" absolute top-[32px] pl-[150px] gap-[8.23px] flex flex-row">
          <img
            src="/white-logo.png"
            alt=""
            className="w-[20.75px] h-[20.45px]"
          />

          <img
            src="/title-white.png"
            alt=""
            className="w-[41.97px] h-[14.52px]"
          />
        </div>
        <div className="absolute bottom-[35px] pl-[150px]">
          <p className="text-base font-normal text-slate-100">Cash</p>
          <p className="text-xl font-semibold text-[#FFFFFF]">{balance}</p>
        </div>
      </div>
    </div>
  );
};
