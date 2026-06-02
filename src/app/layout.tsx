import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wesley Poth - Developer & Designer",
  description:
    "Portfolio showcasing modern web development and design projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col overflow-x-hidden bg-[#fcfcfc] text-black">

        {/* AMBIENT BACKGROUND LAYERS */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

          {/* top glow */}
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-400/25 blur-[120px] animate-pulse" />

          {/* top glow */}
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-400/25 blur-[120px] animate-pulse" />

          {/* left glow */}
          <div className="absolute top-1/3 left-[-250px] h-[500px] w-[500px] rounded-full bg-amber-300/15 blur-[120px]" />
          
        </div>

        {/* MAIN APP */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}