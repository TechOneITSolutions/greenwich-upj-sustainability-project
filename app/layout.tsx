import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Greenwich-UPJ Sustainability Project | Sustainable Built Environment Education",
  description:
    "A UK–Indonesia collaboration delivering sustainability-focused built environment education, academic capacity building, and industry partnership between the University of Greenwich and Universitas Pembangunan Jaya.",
  keywords: [
    "sustainable built environment",
    "higher education",
    "international collaboration",
    "UK Indonesia partnership",
    "University of Greenwich",
    "Universitas Pembangunan Jaya",
    "sustainability education",
    "academic capacity building",
    "industry engagement",
  ],
  authors: [{ name: "Greenwich-UPJ Sustainability Project" }],
  openGraph: {
    title:
      "Greenwich-UPJ Sustainability Project | Sustainable Built Environment Education",
    description:
      "A UK–Indonesia initiative advancing sustainable built environment education, academic innovation, and industry partnership through the University of Greenwich and Universitas Pembangunan Jaya.",
    type: "website",
    siteName: "Greenwich-UPJ Sustainability Project",
    locale: "en_GB",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "International sustainability partnership for built environment education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Greenwich-UPJ Sustainability Project | Sustainable Built Environment Education",
    description:
      "A UK–Indonesia initiative advancing sustainable built environment education, academic innovation, and industry partnership.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans bg-white text-gray-900"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
