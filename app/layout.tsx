import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Noto_Sans_JP } from "next/font/google";

const objective = localFont({
  src: [
    {
      path: "./Objective-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Objective-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Objective-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-objective",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false,
  variable: "--font-noto-sans-jp",
  display: "swap",
  fallback: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "sans-serif"],
});

export const metadata: Metadata = {
  title: "KEISUKE SHIMAMURAPortfolio",
  description: "WEBエンジニアしまむらけいすけのポートフォリオサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${objective.variable} ${notoSansJp.variable}`}>
      <body className={`${notoSansJp.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
