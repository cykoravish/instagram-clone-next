import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SessionWrapper from "@/context/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "instagram clone",
  description: "a clone of instagram with nextjs tailwind firebase.",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
