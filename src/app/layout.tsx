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

export const metadata: Metadata = {
  title: "Rahmi Najib | Full-Stack Developer",
  description:
    "Personal portfolio of Rahmi Najib, a full-stack developer based in Tunis. Building modern web apps with React, Next.js, Node.js, and Express.js, and integrating AI / LLM capabilities.",
  keywords: [
    "Rahmi Najib",
    "portfolio",
    "full-stack developer",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "AI integration",
    "Tunis",
  ],
  authors: [{ name: "Rahmi Najib" }],
  openGraph: {
    title: "Rahmi Najib | Full-Stack Developer",
    description:
      "Always learning, always building. Turning ideas into real, working products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
