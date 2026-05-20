import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Rahul Kittur — Frontend & Android Developer",
  description:
    "MCA graduate and passionate software developer specializing in React.js, Next.js, TypeScript, and Android Development. Building fast, beautiful, and scalable applications.",
  keywords: [
    "Rahul Kittur",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Android Developer",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Rahul Kittur" }],
  openGraph: {
    title: "Rahul Kittur — Frontend & Android Developer",
    description:
      "Building fast, beautiful, and scalable web and mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0f0f0f] text-[#e2e8f0]">
        {children}
      </body>
    </html>
  );
}
