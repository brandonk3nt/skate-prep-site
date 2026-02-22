import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mission & Life Skills Prep - Sign Up to Bring Treats",
  description:
    "Sign up to bring treats for Mission and Life Skills Prep. Join our community and share something delicious!",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased h-full w-full m-0 p-0`}
    >
      <body className="font-sans antialiased h-full w-full m-0 p-0">
        {children}
      </body>
    </html>
  );
}
