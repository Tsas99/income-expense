"use client";
import { createContext, useContext, useState } from "react";
const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const userLogIn = async (username, password) => {
    const result = await axios.post("http://localhost:3000/login", {
      username,
      password,
    });
    setUser(result.user);
    setIsLoggedIn(true);
  };

  return (
    <UserContext.Provider value={{ userLogIn, isLoggedIn, user }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};
