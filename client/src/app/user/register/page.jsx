"use client";
import { AuthTitle } from "@/components/AuthTitle";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { MovePage } from "@/components/MovePage";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    name: "rePassword",
    type: "password",
    placeholder: "Enter your rePassword",
  },
];

const SignupPage = () => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [userInput, setUserInput] = useState({
    email: "",
    username: "",
    password: "",
    rePassword: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const clickHandler = async () => {
    const { password, email, rePassword, name } = userInput;

    if (!name || !email) {
      setError("Invalid inputs");
      return;
    }
    if (userInput.password !== userInput.rePassword) {
      setError("password and repassword not match");
      return;
    }
    try {
      await axios.post("http://localhost:8000/api/users/signup", {
        username: userInput.username,
        email: userInput.email,
        password: userInput.password,
      });
      push("/user/login");
    } catch (error) {
      setError(error.res.data);
    }
  };

  // console.log(data);

  // router.push("/user/login");

  return (
    <div className="flex flex-row justify-center items-center">
      <div className=" flex flex-col w-[50%] h-screen items-center">
        <AuthTitle
          title={"Create Geld account"}
          description={"Sign up below to create your Wallet account"}
        />

        <div className=" flex flex-col mt-[40px] ml-[252px] gap-[16px] w-[384px]">
          {inputs.map(({ name, placeholder, type }) => (
            <Input
              name={name}
              type={type}
              placeholder={placeholder}
              inputHandler={inputHandler}
            />
          ))}

          <div className="text-red-700 text-center mb-4 ">{error}</div>
          <Button
            color="blue"
            children={<div className="text-white ">Sign-Up</div>}
            clickHandler={clickHandler}
          />
        </div>
        <MovePage
          texts={"Already have account?"}
          href={"/user/login"}
          text={"Log In"}
        />
      </div>
      <div className="w-[50%] h-screen bg-[#0166FF]  ml-[126px]"></div>
    </div>
  );
};
export default SignupPage;
