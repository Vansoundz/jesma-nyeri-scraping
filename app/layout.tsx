import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import axios from "axios";
import ProgressBar from "@/components/progress-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesma Estates",
  description: "Jesma Estates",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = (await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/links")).data;
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-amber-50`}
      >
        <ProgressBar />
        <Navbar links={links?.data || []} />
        {children}
      </body>
    </html>
  );
}
