import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    default: "ConvertImageFreely - Free Online Image Converter",
    template: "%s | ConvertImageFreely",
  },

  description:
    "Convert JPG, PNG and WebP images for free directly in your browser. No uploads, no account, and no software installation required.",

  keywords: [
    "ConvertImageFreely",
    "image converter",
    "online image converter",
    "free image converter",
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
    title:
      "ConvertImageFreely - Free Online Image Converter",

    description:
      "Convert JPG, PNG and WebP images directly in your browser. Free, fast and private.",

    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "ConvertImageFreely - Free Online Image Converter",

    description:
      "Convert JPG, PNG and WebP images directly in your browser. Free, fast and private.",
  },

  verification: {
    google:
      "Ge2ovRjke6MQiOBJVVTObcR7AFoPkPUlACfJf0A6ZcI",
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XTDCMZJL2S"
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XTDCMZJL2S');
        `}
      </Script>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9865053094361664"
        crossOrigin="anonymous"
      />

      <Header />

      {children}

      <Footer />
    </body>
    </html>
  );
}