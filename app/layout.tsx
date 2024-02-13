import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from '@/components/providers/NextUi';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PostGenie",
  description: "Transform your tweet into any style using Ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  </ClerkProvider>
  );
}
