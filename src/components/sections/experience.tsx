"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 bg-muted/30 border-y border-cyan-500/10"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="My journey so far"
          description="A timeline of the roles and milestones that shaped how I build today."
        />

        <div className="mt-14 relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 ${
                    isLeft ? "" : "sm:[direction:rtl]"
                  }`}
                >
                  {/* Node */}
                  <span className="absolute left-4 sm:left-1/2 top-1.5 grid place-items-center size-9 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 ring-4 ring-background z-10">
                    <exp.icon className="size-4" />
                  </span>

                  {/* Card */}
                  <div
                    className={`sm:[direction:ltr] ${
                      isLeft ? "sm:pr-8 sm:text-right" : "sm:col-start-2 sm:pl-8"
                    }`}
                  >
                    <span className="inline-block text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                      {exp.period}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <ul
                      className={`mt-3 space-y-1.5 ${
                        isLeft ? "sm:ml-auto sm:max-w-none" : ""
                      }`}
                    >
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className={`flex items-start gap-2 text-sm text-muted-foreground ${
                            isLeft ? "sm:flex-row-reverse sm:text-right" : ""
                          }`}
                        >
                          <Check className="size-4 mt-0.5 shrink-0 text-cyan-500" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
