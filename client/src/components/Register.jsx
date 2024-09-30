"use client";

import { useRouter } from "next/router";
import { Button } from "./Button";
import { DeedText } from "./DeedText";
import { DoodButton } from "./DoodButton";
import { Input } from "./Input";
import { useState } from "react";

export const Register = () => {
  const router = useRouter();
  const [register, isLoggedIn] = useUserContext();
  const [error, setError] = useState("");
  if (isLoggedIn) {
    router.push("/");
    return;
  }
  const [input, setInput] = useState({
    email: "",
    password: "",
    repassword: "",
    username: "",
  });
  const inputHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const clickHandler = async () => {
    if (input.password != input.repassword) {
      setError("Password not match");
      return;
    }
    await register(input.username, input.email, input.password);
  };

  return (
    <div>
      <div className="flex flex-col gap-10">
        <DeedText
          title="Create Geld account"
          description={"Sign up below to create your Wallet account"}
        />
        <div className="flex flex-col gap-4">
          <Input placeholder={"Username"} type={"text"} name={"username"} />
          <Input placeholder={"Email"} type={"text"} name={"email"} />
          <Input placeholder={"Password"} type={"password"} name={"password"} />
          <Input
            placeholder={"Re-password"}
            type={"password"}
            name={"Repassword"}
          />
          {error && <div className="text-center text-red-600">{error}</div>}
          <Button
            text={"Sign Up "}
            color={blue}
            textColor={"white"}
            clickHandler={clickHandler}
          />
          <DoodButton
            text={"Already hav account?"}
            link="login"
            linkText={"Log in"}
          />
        </div>
      </div>
    </div>
  );
};
