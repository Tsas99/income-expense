"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useUser } from "@/provider/UserProvider";
import { Currency, Balance, Finish } from "@/components/steps";

const steps = [Currency, Balance, Finish];

export default function Home() {
  const router = useRouter();
  const { push } = router;
  const [step, setStep] = useState(0);

  const StepComponents = steps[step];

  const continueHandler = () => {
    setStep((prev) => prev + 1);
  };
  if (step == 0) {
    router.push("/");
  }
  return (
    <div className="flex flex-col items-center]">
      <StepComponents continueHandler={continueHandler} />
    </div>
  );
}
