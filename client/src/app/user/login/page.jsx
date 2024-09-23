"use client";

import { AuthTitle } from "@/components/AuthTitle";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Question } from "@/components/Question";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/provider/UserProvider";

const LoginPage = () => {
  const { loginHandlerFunction } = useUser();

  const [error, setError] = useState("");

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };
  const login = async () => {
    console.log("asd");

    setError("");
    try {
      await loginHandlerFunction(loginInput.email, loginInput.password);
      router.push("/stepper");
    } catch (error) {
      setError("email or  password is wrong");
    }
  };

  return (
    <div className="flex flex-row ">
      <div className=" flex flex-col w-[50%] h-screen items-center">
        <AuthTitle
          title={"Welcome Back"}
          description={"Welcome back, Please enter your details "}
        />
        <div className=" flex flex-col mt-[40px] ml-[252px] gap-[16px] ">
          <Input
            name="email"
            type="text"
            placeholder="Email"
            inputHandler={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            inputHandler={handleChange}
          />
          {error}
          <Button text="Log in " onClick={login} />
        </div>

        <Question text="Don’t have account?" href="signup" />
      </div>
      <div className="w-[50%] h-screen bg-[#0166FF]  ml-[126px]"></div>
    </div>
  );
};
export default LoginPage;
