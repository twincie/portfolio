import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Johnson Oyebode — Backend Engineer",
  description: "Backend engineer specializing in Java, Python, scalable APIs, microservices, and production fintech systems.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem("portfolio-theme");document.documentElement.dataset.theme=t==="light"||t==="dark"?t:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch(e){}` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
