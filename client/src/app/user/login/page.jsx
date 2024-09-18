"use client";

import { AuthTitle } from "@/components/AuthTitle";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Question } from "@/components/Question";
import { useState } from "react";

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  const login = async () => {
    console.log(loginInput);
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
          <Button text="Log in " clickHandler={login} />
        </div>

        <Question text="Don’t have account?" href="signup" />
      </div>
      <div className="w-[50%] h-screen bg-[#0166FF]  ml-[126px]"></div>
    </div>
  );
};
export default LoginPage;

// const Login = () => {
//   const [userDetail, setUserDetail] = useState({});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserDetail({ ...userDetail, [name]: value });
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const { data } = await axios.get("http://localhost:8000/users");
//     console.log(userDetail);
//   };
