"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";
import React, { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${montserrat.variable} font-serif bg-black text-white min-h-screen`}
    >
      {/* Global Custom Cursor */}
      <body>
        <div
          className="custom-cursor"
          style={{
            left: cursorPosition.x - 20,
            top: cursorPosition.y - 20,
          }}
        />
        {children}
      </body>
    </html>
  );
}
