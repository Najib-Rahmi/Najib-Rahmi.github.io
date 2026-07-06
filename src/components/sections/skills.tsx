"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { TechIcon } from "@/components/tech-icon";
import { skillCategories } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 bg-muted/30 border-y border-cyan-500/10"
    >
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="What I work with"
          description="A versatile toolkit honed across the stack, from pixel-perfect interfaces to scalable backends."
          nowrap
        />

        <div className="mt-14 flex flex-col divide-y divide-cyan-500/10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="py-8 grid gap-6 md:grid-cols-[200px_1fr] md:items-center first:pt-0 last:pb-0"
            >
              {/* Category label with gradient icon (no box) */}
              <div className="flex items-center gap-3">
                <span className="grid place-items-center size-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30">
                  <cat.icon className="size-5" />
                </span>
                <h3 className="text-base sm:text-lg font-semibold">
                  {cat.title}
                </h3>
              </div>

              {/* Skills as inline items with official brand icons (no boxes) */}
              <ul
                className={`flex gap-x-5 gap-y-4 ${
                  cat.skills.length <= 5
                    ? "flex-nowrap overflow-x-auto"
                    : "flex-wrap"
                }`}
              >
                {cat.skills.map((skill, j) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 + j * 0.04 }}
                    className="group inline-flex items-center gap-2.5 shrink-0"
                  >
                    <TechIcon
                      slug={skill.icon}
                      color={skill.color}
                      size={22}
                      className="transition-all duration-300 group-hover:scale-125"
                    />
                    <span className="text-sm sm:text-base font-medium text-foreground/80 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
