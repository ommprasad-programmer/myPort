import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorTracker from "@/components/ui/CursorTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omm prasad Nath | Portfolio",
  description: "Full Stack Developer, UI/UX Designer, & Creative Thinker.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground selection:bg-neon-cyan/30 selection:text-neon-cyan`}
      >
        <CursorTracker />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
