import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Layers,
  Database,
  BrainCircuit,
  Wrench,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  MapPin,
  Briefcase,
  ExternalLink,
  Rocket,
  Sparkles,
} from "lucide-react";

// Real data scraped from https://github.com/Najib-Rahmi
export const profile = {
  name: "Rahmi Najib",
  firstName: "Rahmi",
  role: "Full-Stack Developer",
  // Tech line shown in the GitHub typing SVG
  techLine: "React | Express.js | Node.js | Next.js",
  tagline:
    "Always learning, always building. I turn ideas into real, working products, from a blank file to a shipped app.",
  bio: "Full-stack developer passionate about turning ideas into real, working products. I specialize in modern JavaScript frameworks and love the entire journey from a blank file to a shipped application. Currently deep into integrating AI / LLM into my workflows, always exploring what's next in tech, and actively looking for my next opportunity to build things that matter.",
  location: "Tunis, Tunisia",
  email: "hello@rahmi.dev",
  avatar: "/avatar.png",
  githubUrl: "https://github.com/Najib-Rahmi",
  resumeUrl: "#",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

// Real social links from the GitHub profile
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Najib-Rahmi",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rehminajib",
    icon: Linkedin,
  },
  {
    label: "freeCodeCamp",
    href: "https://www.freecodecamp.org/nejib-rehmi",
    icon: GraduationCap,
  },
  {
    label: "Email",
    href: "mailto:hello@rahmi.dev",
    icon: Mail,
  },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

// Tech stack taken directly from the GitHub profile README badges
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["React", "Next.js", "Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "AI / LLM",
    icon: BrainCircuit,
    skills: ["MCP", "RAG", "AI Integration"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "VS Code"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  accent: string;
  emoji: string;
};

// Real public repositories from github.com/Najib-Rahmi
export const projects: Project[] = [
  {
    title: "To-Do App",
    description:
      "A modern, responsive Todo app built with React, Vite, and Tailwind CSS. Features drag-and-drop task reordering, a dark gradient theme, and a modular component architecture for seamless task management.",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://najib-rahmi.github.io",
    repoUrl: "https://github.com/Najib-Rahmi/To-Do",
    accent: "from-cyan-500/20 to-blue-500/20",
    emoji: "✅",
  },
  {
    title: "QuizGame",
    description:
      "An interactive quiz game built in Java that tests knowledge across multiple categories. Clean game logic, score tracking, and a straightforward, fun user experience.",
    tags: ["Java", "OOP", "Game Logic"],
    liveUrl: "#",
    repoUrl: "https://github.com/Najib-Rahmi/QuizGame",
    accent: "from-blue-500/20 to-cyan-500/20",
    emoji: "❓",
  },
  {
    title: "Chronometer",
    description:
      "A precise stopwatch and timer application written in Java. Handles start, pause, and lap timing with a responsive, easy-to-read interface for everyday use.",
    tags: ["Java", "Timers", "UI"],
    liveUrl: "#",
    repoUrl: "https://github.com/Najib-Rahmi/Chronometer",
    accent: "from-cyan-400/20 to-blue-600/20",
    emoji: "⏱️",
  },
  {
    title: "Calculator",
    description:
      "A classic calculator app built in Java supporting standard arithmetic operations. Focused on clean code structure, input validation, and a simple, intuitive layout.",
    tags: ["Java", "OOP", "Math"],
    liveUrl: "#",
    repoUrl: "https://github.com/Najib-Rahmi/Calculator",
    accent: "from-blue-400/20 to-cyan-600/20",
    emoji: "🧮",
  },
  {
    title: "Personal Website",
    description:
      "My personal portfolio site hosted on GitHub Pages. Showcases my projects, skills, and background, built with a focus on clean design and fast loading.",
    tags: ["HTML", "CSS", "GitHub Pages"],
    liveUrl: "https://najib-rahmi.github.io",
    repoUrl: "https://github.com/Najib-Rahmi/Najib-Rahmi.github.io",
    accent: "from-cyan-500/20 to-blue-400/20",
    emoji: "🌐",
  },
  {
    title: "freeCodeCamp Certifications",
    description:
      "A collection of my freeCodeCamp coursework and certifications, documenting my progression through responsive web design, JavaScript algorithms, and front-end libraries.",
    tags: ["Web Design", "JavaScript", "Certifications"],
    liveUrl: "https://www.freecodecamp.org/nejib-rehmi",
    repoUrl: "https://github.com/Najib-Rahmi/Freecodecamp-Certifications",
    accent: "from-blue-500/20 to-cyan-400/20",
    emoji: "🎓",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

// A focused journey based on the GitHub profile narrative
export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Open to Opportunities",
    period: "Now",
    description:
      "Building modern web apps end to end and integrating AI / LLM capabilities into real workflows, while actively seeking the next role to build things that matter.",
    icon: Briefcase,
    highlights: [
      "Shipping full-stack apps with React, Next.js, Node.js, and Express.js",
      "Exploring AI / LLM integration, including MCP and RAG patterns",
      "Always learning, always building, always shipping",
    ],
  },
  {
    role: "Project Builder & Contributor",
    company: "GitHub | Open Source",
    period: "Ongoing",
    description:
      "Maintaining a growing set of public repositories spanning web apps, Java utilities, and personal projects, with a focus on clean, readable code.",
    icon: Rocket,
    highlights: [
      "Published 14 public repositories on GitHub",
      "Built Java apps including a quiz game, chronometer, and calculator",
      "Created a React + Vite + Tailwind To-Do app with drag-and-drop",
    ],
  },
  {
    role: "Continuous Learner",
    company: "freeCodeCamp",
    period: "Ongoing",
    description:
      "Progressing through freeCodeCamp certifications, strengthening foundations in responsive design, JavaScript algorithms, and modern front-end development.",
    icon: GraduationCap,
    highlights: [
      "Completed coursework across responsive web design and JavaScript",
      "Applied learnings directly to personal projects on GitHub",
      "Committed to staying current with modern frameworks and tools",
    ],
  },
  {
    role: "Based in",
    company: "Tunis, Tunisia",
    period: "Location",
    description:
      "Working remotely and open to collaboration with teams anywhere in the world. Let's connect and build something amazing together.",
    icon: MapPin,
    highlights: [
      "Available for remote full-stack and AI-integration work",
      "Comfortable across the JavaScript and Java ecosystems",
      "Reachable via GitHub, LinkedIn, and freeCodeCamp",
    ],
  },
];

export { Sparkles };
