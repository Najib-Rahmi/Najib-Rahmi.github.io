import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update this to your real deployed domain when you go live.
const siteUrl = "https://najibrahmi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Najib Rahmi | Full Stack Web Developer",
    template: "%s | Najib Rahmi",
  },
  description:
    "Full stack web developer building modern, responsive web apps with React, Next.js, Node.js, and Express.js, and integrating AI / LLM workflows.",
  keywords: [
    "Najib Rahmi",
    "full stack web developer",
    "portfolio",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "AI integration",
    "LLM",
    "Tunis",
    "Tunisia",
  ],
  authors: [{ name: "Najib Rahmi" }],
  creator: "Najib Rahmi",
  publisher: "Najib Rahmi",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Najib Rahmi | Full Stack Web Developer",
    title: "Najib Rahmi | Full Stack Web Developer",
    description:
      "Curious by nature, I build modern web apps end to end and keep raising the bar with every line of code.",
    images: [
      {
        url: "/hero-bg.webp",
        width: 1672,
        height: 941,
        alt: "Najib Rahmi, full stack web developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Najib Rahmi | Full Stack Web Developer",
    description:
      "Curious by nature, I build modern web apps end to end. Turning complex problems into clean, scalable software that real people use.",
    images: ["/hero-bg.webp"],
    creator: "@najibrahmi",
  },
  icons: {
    icon: [{ url: "/avatar.webp", type: "image/webp" }],
    apple: [{ url: "/avatar.webp", type: "image/webp" }],
  },
  category: "technology",
};

// JSON-LD structured data for richer search results (Person + WebSite schema)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Najib Rahmi",
      url: siteUrl,
      image: `${siteUrl}/avatar.webp`,
      jobTitle: "Full Stack Web Developer",
      description:
        "Full stack web developer building modern, responsive web apps with React, Next.js, Node.js, and Express.js, and integrating AI / LLM workflows.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tunis",
        addressCountry: "TN",
      },
      sameAs: [
        "https://github.com/Najib-Rahmi",
        "https://www.linkedin.com/in/rehminajib",
        "https://www.freecodecamp.org/nejib-rehmi",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "TypeScript",
        "Tailwind CSS",
        "AI Integration",
        "LLM",
        "MCP",
        "RAG",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Najib Rahmi | Full Stack Web Developer",
      description:
        "Portfolio of Najib Rahmi, a full stack web developer based in Tunis.",
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Najib Rahmi | Full Stack Web Developer",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
