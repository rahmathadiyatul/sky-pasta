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
  title: "Sky Pasta - Where Flavor Soars",
  description: "Sky Pasta is a popular Indonesian restaurant chain specializing in Italian cuisine, particularly pasta dishes, tailored to local tastes. Founded by CEO Olid Nz, the brand has expanded to multiple locations, including Tebet, Cinere, Pamulang, Ciledug, Petukangan, Binus Jakarta Barat, and Galaxy Bekasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
