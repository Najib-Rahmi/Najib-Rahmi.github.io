import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Palette,
  Server,
  Database,
  Cloud,
  Smartphone,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export const profile = {
  name: "Alex Carter",
  firstName: "Alex",
  role: "Full Stack Developer & UI/UX Designer",
  tagline:
    "I craft modern, responsive web experiences where clean code meets thoughtful design.",
  location: "San Francisco, CA",
  email: "hello@alexcarter.dev",
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

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "Email", href: "mailto:hello@alexcarter.dev", icon: Mail },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["Figma", "UI/UX", "Prototyping", "Design Systems", "Wireframing"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "SQLite"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "AWS", "CI/CD", "Vercel", "GitHub Actions"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "PWA", "Responsive Design"],
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

export const projects: Project[] = [
  {
    title: "Nimbus Analytics Dashboard",
    description:
      "A real-time analytics platform with customizable widgets, live charts, and role-based access. Built for teams that need data at a glance.",
    tags: ["Next.js", "TypeScript", "Prisma", "Recharts"],
    liveUrl: "#",
    repoUrl: "#",
    accent: "from-cyan-500/20 to-blue-500/20",
    emoji: "📊",
  },
  {
    title: "Pulse Fitness App",
    description:
      "A cross-platform fitness companion with workout tracking, progress charts, and social challenges. Designed mobile-first with a clean, motivating interface.",
    tags: ["React Native", "Expo", "Node.js"],
    liveUrl: "#",
    repoUrl: "#",
    accent: "from-blue-500/20 to-cyan-500/20",
    emoji: "🏃",
  },
  {
    title: "Lumen Design System",
    description:
      "An open-source component library with 60+ accessible components, full theming support, and interactive documentation. Adopted by several startups.",
    tags: ["React", "Tailwind", "Storybook"],
    liveUrl: "#",
    repoUrl: "#",
    accent: "from-cyan-400/20 to-blue-600/20",
    emoji: "🎨",
  },
  {
    title: "Orbit Collaboration Suite",
    description:
      "A real-time collaboration tool with shared whiteboards, live cursors, and presence. Powered by WebSockets for instant, seamless teamwork.",
    tags: ["Next.js", "Socket.io", "Canvas"],
    liveUrl: "#",
    repoUrl: "#",
    accent: "from-blue-400/20 to-cyan-600/20",
    emoji: "🛰️",
  },
  {
    title: "Verdant E-Commerce",
    description:
      "A sustainable marketplace with smart search, Stripe checkout, and an admin dashboard. Optimized for speed and conversion across all devices.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
    accent: "from-cyan-500/20 to-blue-400/20",
    emoji: "🛒",
  },
  {
    title: "Echo AI Assistant",
    description:
      "A conversational assistant with context-aware responses, voice input, and a slick chat interface. Integrates multiple AI models for smart replies.",
    tags: ["React", "AI", "Web Speech API"],
    liveUrl: "#",
    repoUrl: "#",
    accent: "from-blue-500/20 to-cyan-400/20",
    emoji: "🤖",
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

export const experiences: Experience[] = [
  {
    role: "Senior Full Stack Developer",
    company: "Skyline Labs",
    period: "2022 | Present",
    description:
      "Leading the development of a SaaS analytics platform used by thousands of teams worldwide.",
    icon: Briefcase,
    highlights: [
      "Architected a modular frontend that cut load times by 45%",
      "Mentored 4 junior developers and established code review standards",
      "Built a real-time collaboration feature used by 60% of active users",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Brightwave Studio",
    period: "2020 | 2022",
    description:
      "Designed and shipped marketing sites and web apps for clients across fintech and health tech.",
    icon: Briefcase,
    highlights: [
      "Delivered 20+ client projects with a 98% on-time rate",
      "Created a reusable component library adopted company-wide",
      "Improved Lighthouse scores to 95+ across all client sites",
    ],
  },
  {
    role: "UI/UX Designer & Developer",
    company: "Freelance",
    period: "2018 | 2020",
    description:
      "Partnered with startups to turn ideas into polished, user-friendly digital products from the ground up.",
    icon: Briefcase,
    highlights: [
      "Designed and built 15+ products end to end",
      "Conducted user research that shaped core product decisions",
      "Grew a client base through referrals and repeat partnerships",
    ],
  },
  {
    role: "B.S. in Computer Science",
    company: "State University",
    period: "2014 | 2018",
    description:
      "Graduated with honors, focusing on human-computer interaction and software engineering.",
    icon: GraduationCap,
    highlights: [
      "Led the university hackathon team to two regional wins",
      "Published a paper on accessible web interfaces",
      "Built the campus event platform still in use today",
    ],
  },
];
