"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createContext, useContext } from "react";
import axios from "axios";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const loginHandlerFunction = async (email, password) => {
    // console.log(email, password);

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/users/login",
        {
          email,
          password,
        }
      );

      window.localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);

      throw new Error(error.message);
    }
  };
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      router.push("/stepper");
    } else {
      setIsLoggedIn(false);
      router.push("/user/login");
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        loginHandlerFunction,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};
