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
  MessageCircle,
  Briefcase,
  HeartPulse,
} from "lucide-react";

// Real data scraped from https://github.com/Najib-Rahmi
export const profile = {
  name: "Najib Rahmi",
  firstName: "Najib",
  role: "Full Stack Web Developer",
  // Tech line shown in the GitHub typing SVG
  techLine: "React | Express.js | Node.js | Next.js",
  tagline:
    "Curious by nature, I build modern web apps end to end\nand keep raising the bar with every line of code.\nTurning complex problems into clean, scalable software\nthat real people use.",
  bio: "I am a full stack web developer who builds modern, responsive web apps with React, Next.js, Node.js, and Express.js, comfortable across the whole stack from clean interfaces to solid backends.\nI am ambitious and self-confident, driven by an endless curiosity to understand how things work. Whatever catches my interest, I learn it, try it, and push at it until I truly excel at it. That same energy fuels everything I build, from a first line of code to a finished, shipped product.\nRight now I am diving deep into AI integration, exploring MCP, RAG, and agent skills, and working hands-on with LLMs like Claude Code, Kilo Code, and GLM to build smarter, more capable workflows.",
  location: "Tunis, Tunisia",
  email: "najib.rahmi.dev@gmail.com",
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
    label: "WhatsApp",
    href: "https://wa.me/21624583312",
    icon: MessageCircle,
  },
  {
    label: "Email",
    href: "mailto:najib.rahmi.dev@gmail.com",
    icon: Mail,
  },
];

export type Skill = {
  name: string;
  // Official icon slug from https://simpleicons.org (served via cdn.simpleicons.org)
  icon: string;
  // Brand color (hex) from Simple Icons
  color: string;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
};

// Tech stack taken directly from the GitHub profile README badges.
// Icons come from Simple Icons (official brand SVGs) via cdn.simpleicons.org.
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: "html5", color: "#E34F26" },
      { name: "CSS3", icon: "css3", color: "#1572B6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: [
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextdotjs", color: "#FFFFFF" },
      { name: "Node.js", icon: "nodedotjs", color: "#339933" },
      { name: "Express.js", icon: "express", color: "#FFFFFF" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "MongoDB", icon: "mongodb", color: "#4EA94B" },
    ],
  },
  {
    title: "AI / LLM",
    icon: BrainCircuit,
    skills: [
      { name: "GLM", icon: "glm", color: "#3B5BFE" },
      { name: "Kilo Code", icon: "kilocode", color: "#FACC15" },
      { name: "MCP", icon: "anthropic", color: "#D97757" },
      { name: "RAG", icon: "databricks", color: "#FF3621" },
      { name: "AI Integration", icon: "openai", color: "#412991" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#FFFFFF" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "VS Code", icon: "visualstudiocode", color: "#007ACC" },
    ],
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
    title: "Focus Flow",
    description:
      "A beautiful, client-side productivity app built with React 19 and Tailwind CSS v4. Features task management, a Pomodoro timer, daily reflections, and productivity analytics. No backend required, everything runs in the browser.",
    tags: ["React 19", "Tailwind CSS v4", "JavaScript"],
    liveUrl: "#",
    repoUrl: "https://github.com/Najib-Rahmi/FocusFlow",
    accent: "from-cyan-500/20 to-blue-500/20",
    emoji: "🎯",
  },
  {
    title: "To-Do App",
    description:
      "A modern, responsive Todo app built with React, Vite, and Tailwind CSS. Features drag-and-drop task reordering, a dark gradient theme, and a modular component architecture for seamless task management.",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveUrl: "#",
    repoUrl: "https://github.com/Najib-Rahmi/To-Do",
    accent: "from-blue-500/20 to-cyan-500/20",
    emoji: "✅",
  },
  {
    title: "Weather App",
    description:
      "A modern, responsive weather application built with React 19, Vite, and Tailwind CSS v4. Features real-time weather data, 5-day forecasts, geolocation support, and dynamic backgrounds that adapt to weather conditions. Glass morphism UI with a seamless user experience.",
    tags: ["React 19", "Vite", "Tailwind CSS v4", "API"],
    liveUrl: "#",
    repoUrl: "https://github.com/Najib-Rahmi/Weather",
    accent: "from-cyan-400/20 to-blue-600/20",
    emoji: "🌤️",
  },
  {
    title: "Music Player",
    description:
      "A modern React music player with real MP3 playback, custom album artwork, and advanced controls. Built with React 19, Vite, and Tailwind CSS v4.",
    tags: ["React 19", "Vite", "Tailwind CSS v4", "JavaScript"],
    liveUrl: "#",
    repoUrl: "https://github.com/Najib-Rahmi/Music-Player",
    accent: "from-blue-400/20 to-cyan-600/20",
    emoji: "🎵",
  },
  {
    title: "Scientific Calculator",
    description:
      "A basic scientific calculator with a neomorphism design, built with JavaScript, CSS, and HTML. Clean, tactile interface for everyday and advanced calculations.",
    tags: ["JavaScript", "CSS", "HTML", "Neomorphism"],
    liveUrl: "#",
    repoUrl: "https://github.com/Najib-Rahmi/Scientific-Calculator",
    accent: "from-cyan-500/20 to-blue-400/20",
    emoji: "🧮",
  },
  {
    title: "Random Quote Generator",
    description:
      "A React-based quote application built with Vite, featuring a clean UI for displaying and managing inspirational quotes.",
    tags: ["React", "Vite", "JavaScript"],
    liveUrl: "#",
    repoUrl: "https://github.com/Najib-Rahmi/Random-Quote-Generator",
    accent: "from-blue-500/20 to-cyan-400/20",
    emoji: "💬",
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
    role: "Full Stack Web Developer",
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
    role: "Medical Recovery",
    company: "Documented Medical Leave",
    period: "Feb 2024 - Apr 2026",
    description:
      "I was away from the field for about two years due to a health condition. This period is officially documented, and I have the medical paperwork to prove it. I am now fully recovered and back to building, stronger and more motivated than ever.",
    icon: HeartPulse,
    highlights: [
      "Officially documented medical leave from 3 February 2024 to 10 April 2026",
      "Fully recovered and actively returning to full stack development",
      "Used the recovery time to stay current with AI and LLM advancements",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "TAC-TIC | Internship",
    period: "Feb 2023 - Jun 2023 | 5 mos",
    description: "Ariana, Tunisia | Remote",
    icon: Briefcase,
    highlights: [
      "Built a production-ready SPA to digitize the full PFE submission and validation lifecycle, serving three role-scoped user types: Student, Supervisor, and Administrator",
      "Multi-stage submission pipeline (Draft to Submitted to Under Review to Approved/Rejected) with service-layer state transition logic in Laravel",
      "Role-based dashboards with aggregate reporting and real-time status tracking",
      "Centralized Axios instance with request/response interceptors for token injection and global 401 handling",
      "Managed global state via Context API for authenticated session, role resolution, and protected routing through React Router guards",
      "Utilized form validation with React Hook Form, utility-first UI with Tailwind CSS, and a RESTful backend following thin-controller, service-class architecture",
    ],
  },
  {
    role: "Frontend Developer",
    company: "WebUp | Internship",
    period: "Jan 2022 - Feb 2022 | 2 mos",
    description: "Rue d'alger CyberParc, KEF | On-site",
    icon: Briefcase,
    highlights: [
      "Built a fully responsive UI with HTML5, CSS3, and Bootstrap, ensuring consistency across devices",
      "Implemented dynamic UI interactions and form validation using vanilla JavaScript",
      "Structured employee data views (lists, profiles, forms) with clean, reusable HTML/CSS components",
      "Collaborated on integrating the frontend with backend data to display and manage employee records",
    ],
  },
];
