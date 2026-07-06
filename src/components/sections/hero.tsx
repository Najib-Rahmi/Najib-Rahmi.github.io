"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowDownToLine, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background photo, scales to cover without distortion */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url(/hero-bg.png)" }}
        aria-hidden
      />
      {/* Dark overlay + gradient for readability (works in both themes) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]"
        aria-hidden
      />
      {/* Cyan/blue tint accents */}
      <div
        className="absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-cyan-600/30 via-transparent to-blue-700/30"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200"
        >
          <MapPin className="size-3.5" />
          {profile.location}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold"
        >
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {profile.role}
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-2 text-sm sm:text-base font-medium text-cyan-200/90 tracking-wide"
        >
          {profile.techLine}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/80 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:brightness-110 border-0"
          >
            <a href="#projects">
              View My Work
              <ArrowDownToLine className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-full bg-white/5 backdrop-blur-md border-white/30 text-white hover:bg-white/15 hover:text-white"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll-down indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-cyan-300 transition-colors"
      >
        <span className="text-[0.7rem] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <span className="grid place-items-center h-9 w-6 rounded-full border-2 border-white/40">
          <ChevronDown className="size-4 animate-scroll-bounce" />
        </span>
      </motion.a>
    </section>
  );
}
