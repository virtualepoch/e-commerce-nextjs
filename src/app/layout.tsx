import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "./SessionProvider";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce App Template - Next.js",
  description:
    "Complete template with user-login, user-authentication, shopping cart, checkout with Stripe, and Tailwindcss & DaisyUI styling. Generated by create next app",
  keywords: ["e-commerce", "react.js", "next.js"],
  creator: "Craig Kaufman",
  publisher: "Craig Kaufman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} box-border m-0 p-0 border-2 border-cyan-400`}>
        <SessionProvider>
          <Navbar />

          <main className="w-full max-w-screen-xl m-auto mt-16 min-h-screen flex flex-col items-center p-6">
            {children}
          </main>

          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
