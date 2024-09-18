import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col  items-center mt-[400px]">
      <Logo />

      <div className="text-6xl text-[#4072a0] font-medium mt-[50px]">
        Welcome
      </div>
      <div className="flex flex-row gap-8  text-[#0166FF] mt-[20px] ">
        <Link href="/user/signup">Sign up</Link>
        <Link href="/user/login">Login</Link>
      </div>
    </div>
  );
}
