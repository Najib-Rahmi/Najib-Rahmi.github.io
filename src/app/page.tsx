import { Suspense, lazy } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";

// Lazy load below-fold sections
const About = lazy(() => import("@/components/sections/about").then((m) => ({ default: m.About })));
const Skills = lazy(() => import("@/components/sections/skills").then((m) => ({ default: m.Skills })));
const Projects = lazy(() => import("@/components/sections/projects").then((m) => ({ default: m.Projects })));
const Experience = lazy(() => import("@/components/sections/experience").then((m) => ({ default: m.Experience })));
const Contact = lazy(() => import("@/components/sections/contact").then((m) => ({ default: m.Contact })));

export default function Home() {
  return (
    <div className="relative min-h-svh flex flex-col bg-background">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main className="flex-1">
        <Hero />
        <Suspense fallback={null}>
          <About />
        </Suspense>
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}