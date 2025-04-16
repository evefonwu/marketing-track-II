import "./globals.css";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Marketing Track II",
  description: "Challenges from GreatFrontEnd Projects | Built by evefonwu",
};

import { Noto_Sans } from "next/font/google";
export const notoSans = Noto_Sans({
  weight: ["700", "600", "500", "400"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${notoSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
