"use client";

import { AuthTitle } from "@/components/AuthTitle";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Question } from "@/components/Question";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@/provider/UserProvider";

const inputs = [
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
];

const LoginPage = () => {
  const { push } = useRouter();
  const { loginHandler, isLoggedIn, loading } = useUser();
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUserDetail((previous) => ({ ...previous, [name]: value }));
  };
  const clickHandler = async () => {
    const { email, password } = userDetail;
    if (!email || !password) {
      setError("Invalid inputs");
      return;
    }
    try {
      await loginHandler(email, password);
      push("/");
    } catch (error) {
      setError(error.message);
    }
  };
  if (isLoggedIn) {
    push("/");
  }
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  // const router = useRouter();

  // const [loginInput, setLoginInput] = useState({
  //   email: "",
  //   password: "",
  // });

  const { loginHandlerFunction } = useUser();
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setLoginInput((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data } = await axios.post("http://localhost:8000/api/users/login", {
      email: loginInput.email,
      password: loginInput.password,
    });
    loginHandlerFunction(loginInput.email, loginInput.password);

    router.push("/");
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
          <Button text="Log in " clickHandler={handleSubmit} />
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
