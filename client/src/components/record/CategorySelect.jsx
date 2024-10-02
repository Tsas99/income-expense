import React from "react";

export const CategorySelect = () => {
  return (
    <div className="mt-[19px] ml-6">
      <p className="text-base font-normal text-[#1F2937]">Category</p>
      <select className="select select-bordered mt-[10px] w-[338px] h-[48px]">
        <option disabled selected>
          Choose One
        </option>
        <option>Home</option>
        <option>Gift</option>
        <option>Food</option>
        <option>Drink</option>
        <option>Taxi</option>
        <option>Shopping</option>
      </select>
    </div>
  );
};
