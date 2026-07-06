"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 bg-muted/30 border-y border-cyan-500/10"
    >
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="What I work with"
          description="A versatile toolkit honed across the stack, from pixel-perfect interfaces to scalable backends."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-cyan-500/15 bg-card p-6 overflow-hidden transition-all hover:-translate-y-1.5 hover:border-cyan-500/45 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* glow on hover */}
              <div className="pointer-events-none absolute -top-12 -right-12 size-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative flex items-center gap-3">
                <div className="grid place-items-center size-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <cat.icon className="size-6" />
                </div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground border border-cyan-500/10 transition-colors hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
