"use client";

import { Button } from "../Button";
import { Logo } from "../Logo";
import { StepDescription } from "../StepDescription";
import { StepTitle } from "../StepTitle";

export const Currency = ({ continueHandler }) => {
  const asd = async () => {
    continueHandler();
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 w-[107px] h-10">
        <Logo />
      </div>

      <div className="mt-[50px] text-sm font-normal text-[#0F172A]">
        <ul className="steps text-xs font-normal text-[#0F172A]">
          <li className="step step-primary">Currency</li>
          <li className="step">Balance</li>
          <li className="step">Finish</li>
        </ul>
      </div>
      <img src="/a.png" alt="" className="w-[48px] h-[48px] mt-[141px]" />
      <div className="mt-4">
        <StepTitle title={"Select base currency"} />
      </div>

      <div className="mt-6">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            MNT - Mongolian Tugrik
          </option>
          <option>USD - US Dollar</option>
          <option> MNT - Mongolian Tugrik</option>
        </select>
      </div>
      <StepDescription
        description={
          "Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one "
        }
      />
      <div className="mt-[32px]">
        <Button clickHandler={continueHandler} text={"Confirm"} />
      </div>
    </div>
  );
};
