"use client";
import { Comp3 } from "./Comp3";

export const Comp2 = ({ ancestor }) => {
  return (
    <>
      <Comp3 ancestor={ancestor} />
    </>
  );
};
