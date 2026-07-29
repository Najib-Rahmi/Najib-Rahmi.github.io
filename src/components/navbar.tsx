"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

import { cn, scrollToId } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-sm"
          : "bg-transparent",
      )}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("#home");
          }}
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-60 focus:px-4 focus:py-2 focus:rounded-md focus:bg-cyan-500 focus:text-white focus:text-sm focus:font-medium">
          Skip to content
        </a>

        {/* Mobile: Hamburger + Logo on left, WhatsApp + Theme on right */}
        <div className="flex items-center gap-1.5 w-full md:justify-between">
          {/* Left side: Hamburger + Logo */}
          <div className="flex items-center gap-1.5">
            {/* Hamburger - mobile only, left side */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full text-blue-600 dark:text-white hover:text-blue-700 dark:hover:text-cyan-300"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}>
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>

            {/* Logo - right of hamburger on mobile, left on desktop */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#home");
              }}
              className="group flex items-center gap-2.5 font-bold text-base sm:text-lg md:order-first">
              <span className="tracking-tight text-blue-600 dark:text-white [text-shadow:0_0_18px_rgba(34,211,238,0.55)]">
                {profile.firstName}
                <span className="text-cyan-500">.dev</span>
              </span>
            </a>
          </div>

          {/* Right side: WhatsApp + Theme Toggle */}
          <div className="flex items-center gap-2 md:order-last">
            {/* WhatsApp - shown on both mobile and desktop with text */}
            <Button
              asChild
              size="sm"
              className="flex-1 sm:flex-none rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-md border-2 border-white/80 dark:border-white/30 text-blue-700 dark:text-white hover:bg-cyan-50 dark:hover:bg-white/15 hover:text-blue-800 dark:hover:text-white hover:border-cyan-500 dark:hover:border-white/50 items-center gap-1.5 px-4 py-2 text-sm md:block">
              <a
                href="https://wa.me/21624583312"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5">
                <FaWhatsapp
                  className="size-4 text-green-500"
                  aria-hidden="true"
                />
                <span>+216 24 583 312</span>
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 md:absolute md:left-1/2 md:-translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(link.href);
              }}
              className={cn(
                "relative px-3 py-2 text-sm font-medium rounded-md transition-colors",
                "text-muted-foreground hover:text-cyan-600 dark:hover:text-white",
              )}>
              {link.label}
            </a>
          ))}
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
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-cyan-500/10">
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(link.href);
                  }}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:bg-accent hover:text-cyan-600 dark:hover:text-white">
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
