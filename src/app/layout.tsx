import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Breadit",
  description: "A reddit clone built with next.js and Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white text-slate-900 antialiased">
      <body
        className={`min-h-screen pt-12 bg-slate-50  antialiased ${inter.className}`}
      >
        <Navbar/>
        <div className="container max-w-7xl mx-auto h-full pt-12 pl-6">{children}</div>
      </body>
    </html>
  );
}
