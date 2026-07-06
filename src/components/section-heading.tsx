"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  nowrap?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "center",
  nowrap = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400"
      >
        <span className="h-px w-6 bg-gradient-to-r from-transparent to-cyan-500" />
        {eyebrow}
        <span className="h-px w-6 bg-gradient-to-l from-transparent to-cyan-500" />
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={
            nowrap
              ? "text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-nowrap"
              : "max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          }
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
