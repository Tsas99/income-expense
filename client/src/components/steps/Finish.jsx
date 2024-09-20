"use client";
import { useUser } from "@/provider/UserProvider";
import { Button } from "../Button";

export const Finish = ({ continueHandler }) => {
  const { name } = useUser();

  return (
    <div>
      <div>C</div>
      <Button clickHandler={continueHandler} text={"Go to login"} />
      <div>{name}</div>
    </div>
  );
};
