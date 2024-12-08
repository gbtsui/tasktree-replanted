import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const atkinsonHyperlegible = localFont({
  src: "./fonts/AtkinsonHyperlegible.ttf",
  variable: "--font-atkinson-hyperlegible",
  weight: "100 900",
})

const atkinsonMonolegible = localFont({
  src: "./fonts/AtkinsonMonolegible.ttf",
  variable: "--font-atkinson-monolegible",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "tasktree",
  description: "a plant-based project management tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${atkinsonHyperlegible.variable} ${atkinsonMonolegible.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
