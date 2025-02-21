import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { montserrat } from "@/app/fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${geistMono.variable} antialiased text-white bg-[#121212]`}
      >
        {children}
      </body>
    </html>
  );
}
