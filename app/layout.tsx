import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Johnson Oyebode — Backend Engineer",
      description: "The software engineering portfolio of Johnson Oyebode, a backend engineer in Lagos, Nigeria.",
      inLanguage: "en-NG",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Johnson Oyebode — Backend Engineer Portfolio",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-NG",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Johnson Oyebode",
      url: siteUrl,
      image: `${siteUrl}/johnson-oyebode-hd.jpg`,
      jobTitle: "Backend Engineer",
      description: "Backend engineer specializing in Java, Spring Boot, Python, REST APIs, microservices, and fintech systems.",
      address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
      sameAs: [
        "https://github.com/twincie",
        "https://linkedin.com/in/johnson-oyebode-3a9b4b237",
        "https://www.instagram.com/dara_twincie/",
      ],
      alumniOf: { "@type": "CollegeOrUniversity", name: "Redeemer’s University" },
      knowsAbout: ["Java", "Spring Boot", "Python", "REST APIs", "Microservices", "PostgreSQL", "MySQL", "Docker", "CI/CD"],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Johnson Oyebode | Backend Engineer in Lagos, Nigeria",
  description: "Johnson Oyebode is a backend engineer in Lagos specializing in Java, Spring Boot, Python, REST APIs, microservices, and production fintech systems.",
  applicationName: "Johnson Oyebode Portfolio",
  authors: [{ name: "Johnson Oyebode", url: siteUrl }],
  creator: "Johnson Oyebode",
  publisher: "Johnson Oyebode",
  category: "technology",
  keywords: ["Johnson Oyebode", "backend engineer Lagos", "Java developer Nigeria", "Spring Boot developer", "Python backend developer", "REST API developer", "microservices engineer", "fintech backend engineer"],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    title: "Johnson Oyebode | Backend Engineer in Lagos",
    description: "Java, Spring Boot, Python, APIs, microservices, and production fintech systems.",
    type: "website",
    url: siteUrl,
    siteName: "Johnson Oyebode Portfolio",
    locale: "en_NG",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Johnson Oyebode — Backend Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnson Oyebode | Backend Engineer in Lagos",
    description: "Java, Spring Boot, Python, APIs, microservices, and production fintech systems.",
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
