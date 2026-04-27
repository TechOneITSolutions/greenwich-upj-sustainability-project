import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sustainable Built Environment Collaboration",
  description: "A UK–Indonesia partnership focused on sustainability, education, and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-emerald-950 text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Sustainable Built Environment Collaboration. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
