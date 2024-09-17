"use client";
import { Comp2 } from "./Comp2";

export const Comp1 = ({ ancestor }) => {
  return (
    <>
      <Comp2 ancestor={ancestor} />
    </>
  );
};
