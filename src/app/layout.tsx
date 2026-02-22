import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mission & Life Skills Prep - Sign Up to Bring Treats",
  description:
    "Sign up to bring treats for Mission and Life Skills Prep. Join our community and share something delicious!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
