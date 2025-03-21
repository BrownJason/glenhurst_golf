import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import Nav from "../components/ui/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glenhurst Golf Leauge",
  description: "Weekly stats and winnings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
        <div className="flex flex-col  min-h-dvh">
          <header className="flex gap-6 flex-wrap justify-end pt-6 pr-6 fixed sticky top-0 bg-[#6c844c] text-[#f9e6bf] pb-6 z-1000 scroll:h-8">
            <Nav />
          </header>
          <div className="flex-grow dark my--10 bg-[url(/golf_bg.jpg)] bg-scroll bg-cover">{children}</div>
          <Analytics />
          <footer className="row-start-3 fixed flex gap-6 flex-wrap items-center justify-center sticky bottom-0 py-8 bg-[#6c844c] text-[#f9e6bf]">
            <Link href="/">&copy; 2025 GlenHurst - Change Later</Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
