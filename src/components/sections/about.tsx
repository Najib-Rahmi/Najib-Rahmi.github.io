"use client";

import { motion } from "framer-motion";
import { Sparkles, Coffee, Rocket, Heart } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/portfolio-data";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "50+", label: "Projects Shipped" },
  { value: "30+", label: "Happy Clients" },
  { value: "15K+", label: "Lines of Coffee" },
];

const traits = [
  {
    icon: Sparkles,
    title: "Detail-Oriented",
    text: "I sweat the small stuff, from pixel-perfect spacing to accessible color contrast.",
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    text: "I balance speed and quality, delivering iterative improvements that move the needle.",
  },
  {
    icon: Heart,
    title: "User-First",
    text: "Every decision starts with the people who will actually use what I build.",
  },
  {
    icon: Coffee,
    title: "Always Learning",
    text: "I stay curious, exploring new tools and patterns to keep my craft sharp.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into polished products"
          description="I am a developer and designer who loves the space where engineering meets empathy. Here is a little more about how I work."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              Hi, I am {profile.name}. I build web applications that feel fast,
              look clean, and work hard for the people who use them. Over the
              past six years I have worked with startups and studios to ship
              products from first sketch to production.
            </p>
            <p>
              My toolkit spans the whole stack, from React and Next.js on the
              frontend to Node.js and databases on the backend. I care deeply
              about design systems, accessibility, and the small details that
              make an interface feel effortless.
            </p>
            <p>
              When I am not coding, you will find me sketching UI ideas,
              exploring design trends, or contributing to open source. I believe
              great software is a team sport, and I love collaborating with
              designers, product managers, and fellow engineers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
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
