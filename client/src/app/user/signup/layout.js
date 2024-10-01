import "../../globals.css";
import { UserProvider } from "@/provider/UserProvider";

export const metadata = {
  title: "Register ",
  description:
    "From today you're gonna make sure how your incomes and expenses are doing",
};

export default function RegisterLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row w-screen">
          <div className="w-[50%] flex justify-center items-center h-screen">
            {children}
          </div>
          <div className="w-[50%] bg-blue-600 h-screen"></div>
        </div>
      </body>
    </html>
  );
}
