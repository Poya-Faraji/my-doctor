import { ReactNode } from "react";
import type { Metadata } from "next";

import { Roboto } from "next/font/google";

import "./page.module.css";

import "./globals.css";
import HeaderComponent from "@/components/header/header-component";

export const metadata: Metadata = {
  title: "My doctor",
  description:
    "Find trusted doctors, read verified patient reviews, compare ratings, and book appointments online with Doctor Point. Fast, simple, and secure healthcare scheduling.",
};

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <HeaderComponent />
        <main>{children}</main>
      </body>
    </html>
  );
}
