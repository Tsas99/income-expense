"use client";
import { AuthTitle } from "@/components/AuthTitle";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Question } from "@/components/Question";
import { useState } from "react";

const SignupPage = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    username: "",
    rePassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const register = async () => {
    console.log(userInput);
  };

  return (
    <div className="flex flex-row">
      <div className=" flex flex-col w-[50%] h-screen items-center">
        <AuthTitle
          title={"Create Geld account"}
          description={"Sign up below to create your Wallet account"}
        />
        <div className=" flex flex-col mt-[40px] ml-[252px] gap-[16px]">
          <Input
            name="username"
            type="text"
            placeholder="username"
            inputHandler={handleChange}
          />
          <Input name="email" type="text" placeholder="Email" />
          <Input
            type="password"
            placeholder="Password"
            inputHandler={handleChange}
          />
          <Input
            type="rePassword"
            placeholder="rePassword"
            inputHandler={handleChange}
          />
          <Button text="Sign up" clickHandler={register} />
        </div>
        <Question text="Already have account?" href="login" />
      </div>
      <div className="w-[50%] h-screen bg-[#0166FF]  ml-[126px]"></div>
    </div>
  );
};
export default SignupPage;

// const usernameHandler = (event) => {
//   event.preventDefault();
//   setUserInput((prev) => ({ ...prev, username: event.target.value }));
// };
// const emailHandler = (event) => {
//   event.preventDefault();
//   setUserInput((prev) => ({ ...prev, email: event.target.value }));
// };
// const passwordHandler = (event) => {
//   event.preventDefault();
//   setUserInput((prev) => ({ ...prev, password: event.target.value }));
// };
// const rePasswordHandler = (event) => {
//   event.preventDefault();
//   setUserInput((prev) => ({ ...prev, rePassword: event.target.value }));
// };
