"use client";

import { Category } from "@/components/record/Category";
import { Days } from "@/components/record/Days";
import Record from "@/components/record/Record";
import { RecordHeader } from "@/components/record/RecordHeader";
import { Types } from "@/components/record/Types";

import React from "react";

const RecordPage = () => {
  return (
    <div>
      <RecordHeader />
      <div className="flex flex-row">
        <div className="flex flex-col mt-6 ml-[120px] w-[282px] h-[1080px] rounded-xl bg-[#E5E7EB] pt-6 pl-4">
          <div className="text-2xl font-semibold text-[#000000] ">Records</div>
          <Record />
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-[250px] h-8 mt-6 "
          />
          <Types />
          <Category />
        </div>
        <div>
          <Days />
        </div>
      </div>
    </div>
  );
};
export default RecordPage;
