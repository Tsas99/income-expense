"use client";

import React, { useState } from "react";
import { DeedText } from "./DeedText";
import { Input } from "postcss";
import { DoodButton } from "./DoodButton";
import { useUserContext } from "@/provider/UserContext";
import { useRouter } from "next/router";

export const Login = () => {
  const { login, isLoggedIn } = useUserContext();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const inputHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value);

    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const clickHandler = async () => {
    try {
      await login(input.email, input.password);
    } catch (err) {
      setError(err.message);
    }
  };

  if (isLoggedIn) {
    router.push("/");
  }

  return (
    <div className="flex flex-col gap-10">
      <DeedText
        title={"Welcome Back"}
        description={"Welcome back, Please enter your details"}
      />
      <div className="flex flex-col gap-4">
        <Input
          placeholder={"Email"}
          name="email"
          type={"text"}
          value={input.email}
          inputHandler={inputHandler}
        />
        <Input
          placeholder={"Password"}
          name="password"
          type={"text"}
          value={input.password}
          inputHandler={inputHandler}
        />
        <Button
          text={"Log in"}
          color="blue"
          type={"text"}
          value={input.password}
          clickHandler={clickHandler}
        />
      </div>
      <DoodButton
        text={"Don’t have account?"}
        linkText={"Sign Up"}
        link={"register"}
      />
    </div>
  );
};
