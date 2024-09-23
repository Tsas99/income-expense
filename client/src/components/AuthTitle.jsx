"use client";
import React from "react";

export const AuthTitle = ({ title, description }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};
