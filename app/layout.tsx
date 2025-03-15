import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "ポートフォリオ",
  description: "私のポートフォリオサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${objective.variable}`}>
      <body className={`${objective.className}`}>{children}</body>
    </html>
  );
}
