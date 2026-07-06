"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>("#home");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-md focus:bg-cyan-500 focus:text-white focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-bold text-base sm:text-lg"
        >
          <span className="relative shrink-0 transition-transform group-hover:scale-110">
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 blur-[3px] opacity-70" />
            <img
              src={profile.avatar}
              alt={`${profile.name} logo`}
              className="relative size-8 sm:size-9 rounded-full object-cover ring-2 ring-background"
            />
          </span>
          <span className="tracking-tight text-blue-600 dark:text-white [text-shadow:0_0_18px_rgba(34,211,238,0.55)]">
            {profile.name}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-3 py-2 text-sm font-medium rounded-md transition-colors",
                active === link.href
                  ? "text-cyan-600 dark:text-cyan-400"
                  : "text-muted-foreground hover:text-cyan-600 dark:hover:text-white"
              )}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full text-blue-600 dark:text-white hover:text-blue-700 dark:hover:text-cyan-300"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-cyan-500/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    active === link.href
                      ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                      : "text-muted-foreground hover:bg-accent hover:text-cyan-600 dark:hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
