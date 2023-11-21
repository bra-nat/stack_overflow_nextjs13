import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "Explore DevFlow, a powerful and intuitive Q&A platform for developers, crafted with Next.js. Dive into a community-driven space where developers share knowledge, collaborate on projects, and find solutions to coding challenges. Join the flow, ask questions, and contribute to the ever-growing pool of insights at DevFlow – your go-to hub for seamless development experiences.",
  icons: {
    icon: "/assets/images/site-loadGetInitialProps.svg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
