"use client";

import { Loading } from "@/components/Loading";
import { Balance, Currency, Finish } from "@/components/steps";
import { TopSection } from "@/components/steps/TopSection";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const Conditionals = [Currency, Balance, Finish];

const StepsPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  const ChosenComponents = Conditionals[step];

  const confirmHandler = () => {
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
  ``;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-[141px] items-center mt-[150px]">
      <TopSection step={step} />
      <ChosenComponents confirmHandler={confirmHandler} />
    </div>
  );
};
export default StepsPage;
