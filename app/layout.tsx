import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Johnson Oyebode — Creative Portfolio",
  description: "The portfolio of Johnson Oyebode, a multidisciplinary creator based in Lagos, Nigeria.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
