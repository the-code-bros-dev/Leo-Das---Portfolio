import type { Metadata } from "next";
import { Anton, Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Leo Das —> Creative Designer & Developer",
  description: "UI & UX  · design thinker · product designer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${syne.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
