import "./globals.css";
import { UserProvider } from "@/provider/UserProvider";

export const metadata = {
  title: " My income Expense",
  description:
    "From today you're gonna make sure how your incomes and expenses are doing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
