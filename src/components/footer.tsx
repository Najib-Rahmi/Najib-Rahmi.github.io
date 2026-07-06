"use client";

import { Heart, ArrowUp } from "lucide-react";

import { profile, socialLinks, navLinks } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-cyan-500/10 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <a
              href="#home"
              className="text-lg font-bold tracking-tight"
            >
              {profile.firstName}
              <span className="text-cyan-500">.dev</span>
            </a>
            <p className="mt-1 text-sm text-muted-foreground max-w-sm">
              {profile.role}. Building thoughtful digital experiences from{" "}
              {profile.location}.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid place-items-center size-9 rounded-lg border border-cyan-500/15 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-cyan-500/45 hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cyan-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} {profile.name}. Built with
            <Heart className="size-3.5 text-cyan-500 fill-cyan-500" />
            using Next.js & Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
