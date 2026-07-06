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
  title: "Alex Carter | Full Stack Developer & UI/UX Designer",
  description:
    "Personal portfolio of Alex Carter, a full stack developer and UI/UX designer crafting modern, responsive web experiences.",
  keywords: [
    "Alex Carter",
    "portfolio",
    "full stack developer",
    "UI/UX designer",
    "web developer",
    "Next.js",
  ],
  authors: [{ name: "Alex Carter" }],
  openGraph: {
    title: "Alex Carter | Full Stack Developer & UI/UX Designer",
    description:
      "Crafting modern, responsive web experiences with clean code and thoughtful design.",
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
