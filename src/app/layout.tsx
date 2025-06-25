"use client";

import { Inter_Tight } from "next/font/google";
import "@/styles/globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} antialiased`}>{children}</body>
    </html>
  );
}
