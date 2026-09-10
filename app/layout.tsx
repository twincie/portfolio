import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://johnson-oyebode-portfolio.oyebodej2.chatgpt.site");

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Johnson Oyebode",
  url: siteUrl,
  jobTitle: "Backend Engineer",
  sameAs: ["https://github.com/twincie", "https://linkedin.com/in/johnson-oyebode-3a9b4b237"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Redeemer’s University" },
  knowsAbout: ["Java", "Spring Boot", "Python", "REST APIs", "Microservices", "PostgreSQL", "MySQL", "Docker"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Johnson Oyebode — Backend Engineer",
  description: "Backend engineer specializing in Java, Python, scalable APIs, microservices, and production fintech systems.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Johnson Oyebode — Backend Engineer",
    description: "I build secure, scalable backend systems that perform.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Johnson Oyebode — Backend Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnson Oyebode — Backend Engineer",
    description: "I build secure, scalable backend systems that perform.",
    images: ["/og.png"],
  },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
