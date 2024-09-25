"use client";
import { RecordHeader } from "@/components/record/RecordHeader";
import { Records } from "@/components/record/Records";
import React from "react";
import { Category } from "../../components/record/Category";

const RecordPage = () => {
  return (
    <div>
      <RecordHeader />
      <Records />
    </div>
  );
};
export default RecordPage;
