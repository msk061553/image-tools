import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: {
    default: "Free Online Image Tools",
    template: "%s | Free Online Image Tools",
  },

  description:
    "Free online image conversion tools for JPG, PNG and WebP. Convert images directly in your browser without uploading your files.",

  keywords: [
    "image converter",
    "online image converter",
    "jpg converter",
    "jpg to png",
    "png to jpg",
    "jpg to webp",
    "png to webp",
    "webp to jpg",
    "webp to png",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Free Online Image Tools",
    description:
      "Convert JPG, PNG and WebP images directly in your browser.",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Free Online Image Tools",
    description:
      "Convert JPG, PNG and WebP images directly in your browser.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}