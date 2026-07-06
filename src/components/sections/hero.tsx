"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowDownToLine, MapPin, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background photo, scales to cover without distortion.
          Mobile uses a portrait-optimized image; desktop uses the landscape one. */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 md:hidden"
        style={{ backgroundImage: "url(/hero-bg-mobile.png)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 hidden md:block"
        style={{ backgroundImage: "url(/hero-bg.png)" }}
        aria-hidden
      />
      {/* Dark overlay for dark mode */}
      <div
        className="absolute inset-0 hidden dark:block bg-gradient-to-b from-black/70 via-black/55 to-black/80"
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]"
        aria-hidden
      />
      {/* Cyan/blue tint accents (both themes) */}
      <div
        className="absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-cyan-600/30 via-transparent to-blue-700/30"
        aria-hidden
      />

      {/* Content: on mobile the name/role sit near the top and the tagline/buttons near the bottom.
          On tablet/desktop the content shifts to the left to keep the subject's face and desk clear. */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 w-full flex flex-col items-center md:items-start text-center md:text-left text-white dark:text-slate-900 md:justify-center md:min-h-svh md:py-20 pt-24 pb-28 md:pt-20 md:pb-20 justify-between min-h-svh">
        {/* Top: location badge + name + role + tech line */}
        <div className="flex flex-col items-center md:items-start">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/20 border-slate-900/10 bg-slate-900/5 text-cyan-600 dark:text-cyan-200"
          >
            <MapPin className="size-3.5" />
            {profile.location}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-blue-600 dark:text-white [text-shadow:0_0_40px_rgba(34,211,238,0.55)]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold"
          >
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
              {profile.role}
            </span>
          </motion.p>
        </div>

        {/* Bottom: tagline + buttons */}
        <div className="flex flex-col items-center md:items-start w-full">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto md:ml-0 max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 dark:text-white/80 leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 sm:mt-9 flex flex-row items-center md:justify-start justify-center gap-3 w-full sm:w-auto md:w-auto"
          >
            <Button
              asChild
              size="lg"
              className="flex-1 sm:flex-none rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-md border-2 border-white/80 dark:border-white/30 text-blue-700 dark:text-white hover:bg-cyan-50 dark:hover:bg-white/15 hover:text-blue-800 dark:hover:text-white hover:border-cyan-500 dark:hover:border-white/50"
            >
              <a href="#projects">
                View My Work
                <Eye className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="flex-1 sm:flex-none rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-md border-2 border-white/80 dark:border-white/30 text-blue-700 dark:text-white hover:bg-cyan-50 dark:hover:bg-white/15 hover:text-blue-800 dark:hover:text-white hover:border-cyan-500 dark:hover:border-white/50"
            >
              <a href="/cv.pdf" download>
                Download CV
                <ArrowDownToLine className="size-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-500 dark:text-white/70 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
      >
        <span className="text-[0.7rem] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <span className="grid place-items-center h-9 w-6 rounded-full border-2 border-slate-400/50 dark:border-white/40">
          <ChevronDown className="size-4 animate-scroll-bounce" />
        </span>
      </motion.a>
    </section>
  );
}
