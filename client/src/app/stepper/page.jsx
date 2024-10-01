"use client";

import { Loading } from "@/components/Loading";

import axios from "axios";
import { API_URl } from "@/utils/constant.js";
import { TopSection } from "@/components/steps/TopSection";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { Stepper } from "@/components/steps/Stepper";
import { Balance, Currency, Finish } from "@/components/steps";

const Cab = [Currency, Balance, Finish];

const StepsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [step, setStep] = useState(0);

  const RenderingOne = Cab[step];
  const router = useRouter();

  const continueHandler = () => {
    if (step == 2) {
      router.push("/dashboard");
      return;
    }
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-[141px] items-center mt-[150px]">
      <Stepper />
      <RenderingOne continueHandler={continueHandler} />

      {error && <div className="text-red-500 text-center">{error}</div>}
    </div>
  );
};
export default StepsPage;
