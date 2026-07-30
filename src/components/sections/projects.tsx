"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-10 sm:py-10 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected projects"
          description="A few things I have designed and built. Each one solved a real problem for real people."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-cyan-500/15 bg-card overflow-hidden transition-all hover:-translate-y-2 hover:border-cyan-500/45 hover:shadow-2xl hover:shadow-cyan-500/10">
              {/* Cover */}
              <div
                className={`relative h-44 bg-linear-to-br ${project.accent} overflow-hidden rounded-t-2xl`}>
                <div className="absolute inset-0 bg-grid opacity-50" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-cyan-500/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-cyan-500/10 pt-4">
                  {project.isPrivate ? (
                    <span className="text-sm font-medium text-muted-foreground">
                      Private Project
                    </span>
                  ) : (
                    <>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline">
                          <ExternalLink className="size-4" />
                          Live
                        </a>
                      ) : null}
                      {project.liveUrl && project.repoUrl ? (
                        <span className="text-muted-foreground/40">|</span>
                      ) : null}
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                          <Github className="size-4" />
                          Code
                        </a>
                      ) : null}
                    </>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
