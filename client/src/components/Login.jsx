"use client";

import { useUser } from "@/provider/UserProvider";
import { useRouter } from "next/router";

export const Login = () => {
  const router = useRouter();
  const { userLogin, isLoggedIn } = useUser();
  if (isLoggedIn) {
    router.push("/");
  }
  return (
    <div>
      <input type="text" />
      <input type="text" />

      <button onClick={() => userLogin(username, password)}>Login</button>
    </div>
  );
};
