"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { TechIcon } from "@/components/tech-icon";
import { skillCategories } from "@/lib/portfolio-data";

export function Skills() {
  const skills = skillCategories.flatMap((category) => category.skills);

  return (
    <section
      id="skills"
      className="relative py-10  sm:py-10 bg-muted/30 border-y border-cyan-500/10">
      <div className="absolute inset-0 bg-grid opacity-40 mask[radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="What I work with"
          description="A versatile toolkit honed across the stack, from pixel-perfect interfaces to scalable backends."
          nowrap
        />

        <div className="mt-14 relative mx-auto h-130 w-full max-w-6xl overflow-hidden">
          {skills.slice(0, 17).map((skill, index) => {
            // Icons whose paths fill the viewBox edge-to-edge (e.g. the solid
            // JS/TS squares). They need extra padding to match the visual weight
            // of icons like React/Tailwind that carry natural negative space.
            const FULL_BLEED = new Set(["javascript", "typescript", "express"]);
            const scale = FULL_BLEED.has(skill.icon) ? 0.75 : 1;
            const placement = [
              {
                name: "HTML5",
                top: "0%",
                left: "40%",
                size: 90,
                border: "border-cyan-400/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "CSS3",
                top: "0%",
                left: "21%",
                size: 90,
                border: "border-white/80 dark:border-slate-900/80",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "JavaScript",
                top: "9%",
                left: "67%",
                size: 120,
                border: "border-cyan-400/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "TypeScript",
                top: "9%",
                left: "10%",
                size: 120,
                border: "border-cyan-400/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "Tailwind CSS",
                top: "0%",
                left: "59%",
                size: 90,
                border: "border-white/90 dark:border-slate-900/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "React.js",
                top: "9%",
                left: "29%",
                size: 120,
                border: "border-cyan-400/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "Next.js",
                top: "35%",
                left: "29%",
                size: 120,
                border: "border-white/90 dark:border-slate-900/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "Node.js",
                top: "9%",
                left: "48%",
                size: 120,
                border: "border-cyan-400/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "Express.js",
                top: "35%",
                left: "48%",
                size: 120,
                border: "border-cyan-400/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "MySQL",
                top: "25%",
                left: "21%",
                size: 90,
                border: "border-white/90 dark:border-slate-900/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "PostgreSQL",
                top: "25%",
                left: "59%",
                size: 90,
                border: "border-cyan-400/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "MongoDB",
                top: "25%",
                left: "40%",
                size: 90,
                border: "border-white/90 dark:border-slate-900/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "GLM",
                top: "50%",
                left: "21%",
                size: 90,
                border: "border-cyan-400/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "Kilo Code",
                top: "50%",
                left: "40%",
                size: 90,
                border: "border-white/90 dark:border-slate-900/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "MCP",
                top: "35%",
                left: "10%",
                size: 120,
                border: "border-cyan-400/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "RAG",
                top: "35%",
                left: "67%",
                size: 120,
                border: "border-white/90 dark:border-slate-900/90",
                bg: "bg-black dark:bg-white",
              },
              {
                name: "Claude",
                top: "50%",
                left: "59%",
                size: 90,
                border: "border-white/90 dark:border-slate-900/90",
                bg: "bg-black dark:bg-white",
              },
            ][index];

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.88, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`group absolute flex items-center justify-center rounded-[28%] border ${placement.border} ${placement.bg} transition duration-300 hover:-translate-y-1`}
                style={{
                  width: placement.size,
                  height: placement.size,
                  top: placement.top,
                  left: placement.left,
                  clipPath:
                    "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                }}>
                <TechIcon
                  slug={skill.icon}
                  color={skill.color}
                  // Icon fills the hexagon minus its inset, scaled down 10%.
                  // Full-bleed icons (JS, TS, Express) get extra padding so they
                  // match the visual weight of icons with natural negative space.
                  size={Math.round((placement.size - 24) * 0.9 * scale)}
                  // Hexagon background is inverted per theme (black / white), so
                  // adaptive icons must invert too to stay readable.
                  onInvertedBg
                />

                <span className="pointer-events-none absolute inset-x-0 bottom-4 mx-auto w-max rounded-full border border-white/10 bg-slate-950/95 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
                  {placement.name ?? skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
