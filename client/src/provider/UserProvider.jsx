"use client";

import { API_URL } from "../utils/constant.js";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  const loginHandlerFunction = async (email, password) => {
    try {
      const result = await axios.post(`${API_URL}/api/users/login`, {
        email: email,
        password: password,
      });
      if (result?.data?.token) {
        window.localStorage.setItem("token", result.data.token);
        setIsLoggedIn(true);
        setToken(result.data.token);
        setLoading(false);
        router.push("/");
      } else {
        window.localStorage.removeItem("token");
        setIsLoggedIn(false);
        setToken("");
        setLoading(false);
        router.push("/user/login");
      }
    } catch (err) {
      console.log(err);

      throw new Error(err.response.data.messge);
    }
  };

  const register = async (username, email, password) => {
    try {
      await axios.post(`${API_URL}/register`, {
        email: email,
        password: password,
        username: username,
      });
      router.push("/user/login");
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setToken(token);
      setLoading(false);
    } else {
      window.localStorage.removeItem("token");
      setIsLoggedIn(false);
      setToken("");
      setLoading(false);
      router.push("/user/login");
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        loginHandlerFunction,
        isLoggedIn,
        token,
        loading,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  const user = useContext(UserContext);
  return user;
};
