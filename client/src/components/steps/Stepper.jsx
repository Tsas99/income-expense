"use client";

import { Geld } from "./icons/Geld";

export const Stepper = () => {
  return (
    <div className="flex w-screen items-center flex-col gap-4">
      <Geld wid={80} hei={40} />
      <ul className="steps w-[340px]">
        <li className="step step-primary">Curency</li>
        <li className="step">Balance</li>
        <li className="step">Finish</li>
      </ul>
    </div>
  );
};
