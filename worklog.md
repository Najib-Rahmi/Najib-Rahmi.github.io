---
Task ID: 1
Agent: main (Z.ai Code)
Task: Create a modern, responsive personal portfolio website with Hero (photo background), About, Skills, Projects, Experience/Timeline, and Contact form sections. Cyan/blue/white color scheme, light/dark toggle, smooth scroll, Next.js 16 + Tailwind CSS 4 + REST API.

Work Log:
- Copied uploaded photo from /home/z/my-project/upload/mybackgroundPhoto.png to /home/z/my-project/public/hero-bg.png (1672x941 PNG).
- Created theme provider (src/components/theme-provider.tsx) using next-themes, default dark.
- Created theme toggle (src/components/theme-toggle.tsx) with Sun/Moon icons.
- Updated src/app/globals.css with cyan/blue/white color scheme (oklch), smooth scroll, custom scrollbar, scroll-bounce and float animations, gradient text and grid pattern utilities.
- Updated src/app/layout.tsx with ThemeProvider and portfolio metadata.
- Created centralized content data file src/lib/portfolio-data.ts (profile, navLinks, socialLinks, skillCategories, projects, experiences).
- Built Navbar (src/components/navbar.tsx) with active section detection (IntersectionObserver), smooth scroll links, mobile hamburger menu, and theme toggle.
- Built reusable SectionHeading component (src/components/section-heading.tsx).
- Built Hero section (src/components/sections/hero.tsx): full-screen photo background with bg-cover, dark gradient overlay, cyan/blue tint, name/title/tagline, CTA buttons, scroll-down indicator.
- Built About section (src/components/sections/about.tsx) with bio, stats grid, and trait cards.
- Built Skills section (src/components/sections/skills.tsx) with 6 categorized cards and grid pattern background.
- Built Projects section (src/components/sections/projects.tsx) with responsive 3-column grid cards, live/code links.
- Built Experience section (src/components/sections/experience.tsx) with alternating timeline layout.
- Built Contact section (src/components/sections/contact.tsx) with validated form (name/email/message), contact info, and social media icons.
- Created REST API endpoint src/app/api/contact/route.ts (POST + GET) with server-side validation.
- Built Footer (src/components/footer.tsx) sticky to bottom via flex layout.
- Assembled src/app/page.tsx with min-h-svh flex-col layout (footer mt-auto).
- Ran `bun run lint` -> passed, no errors.
- Verified with Agent Browser: page renders, no console/runtime errors, theme toggle works, smooth scroll nav works, contact form submits to API (POST /api/contact 200), form validation shows errors, mobile hamburger menu works, responsive at 390px and 1280px.
- Confirmed no em dashes in text content (used ' | ' for date ranges as requested).

Stage Summary:
- Production-ready single-page portfolio at / route.
- All 6 required sections implemented with cyan/blue/white palette only.
- Light/dark mode fully functional.
- REST contact API working end to end with client + server validation.
- Fully responsive (mobile, tablet, desktop) with sticky footer.
- Lint clean, no runtime errors, browser-verified interactivity.
