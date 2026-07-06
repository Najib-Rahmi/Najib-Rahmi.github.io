"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, GraduationCap, Code2 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/portfolio-data";

const stats = [
  { value: "14", label: "Public Repos" },
  { value: "5+", label: "Tech Domains" },
  { value: "AI", label: "LLM Integration" },
  { value: "100%", label: "Always Learning" },
];

const traits = [
  {
    icon: Code2,
    title: "Full-Stack Mindset",
    text: "From a blank file to a shipped app, I enjoy the whole journey across the JavaScript and Java ecosystems.",
  },
  {
    icon: Sparkles,
    title: "AI / LLM Curious",
    text: "Currently integrating MCP, RAG, and AI capabilities into real workflows to build smarter products.",
  },
  {
    icon: Rocket,
    title: "Always Shipping",
    text: "I keep my GitHub active with projects, from Java utilities to React web apps with clean component design.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learner",
    text: "Progressing through freeCodeCamp certifications and applying every lesson directly to real projects.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into real, working products"
          description="Full-stack developer based in Tunis, passionate about modern JavaScript frameworks and the craft of shipping software."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12 items-start">
          {/* Avatar + bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 blur-md opacity-60" />
                <img
                  src={profile.avatar}
                  alt={`${profile.name} avatar`}
                  width={96}
                  height={96}
                  className="relative size-20 sm:size-24 rounded-full object-cover ring-4 ring-background"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{profile.name}</h3>
                <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  {profile.role}
                </p>
                <p className="text-xs text-muted-foreground">
                  {profile.location}
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              {profile.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-xl border border-cyan-500/15 bg-card p-4 text-center transition-colors hover:border-cyan-500/40"
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Traits */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 grid sm:grid-cols-2 gap-4"
          >
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-xl border border-cyan-500/15 bg-card p-5 transition-all hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="grid place-items-center size-10 rounded-lg bg-gradient-to-br from-cyan-500/15 to-blue-600/15 text-cyan-600 dark:text-cyan-400 transition-transform group-hover:scale-110">
                  <t.icon className="size-5" />
                </div>
                <h3 className="mt-3 font-semibold text-base">{t.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {t.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
