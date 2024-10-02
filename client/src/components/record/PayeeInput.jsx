import React from "react";

export const PayeeInput = () => {
  return (
    <div className="ml-6">
      <p className="mt-[15px]">Payee</p>
      <input
        type="text"
        placeholder="Write here"
        className="input input-bordered w-[338px] h-[48px] mt-[5px] "
      />
    </div>
  );
};
