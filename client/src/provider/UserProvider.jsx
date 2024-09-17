"use client";
import { createContext, useContext, useEffect, useState } from "react";
const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const userLogIn = async (username, password) => {
    const { token, user } = await axios.post("http://localhost:3000/login", {
      username,
      password,
    });
    setUser(result.user);
    setIsLoggedIn(true);

    //setLocalStorage("token", token)
  };
  useEffect(() => {
    const token = getLocal("token");
    const user = axios.get("/isTokenVerified", { token: token });
    if (token) {
      setUser(result.user);
      setIsLoggedIn(true);
    }
  });

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
