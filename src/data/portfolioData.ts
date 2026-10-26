
// Interfaces
export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  jobType: string;
  isContract?: boolean;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink: string;
  codeLink: string;
  work: boolean;
  hobby: boolean;
}

export const personalInfo = {
  name: "MD Ashraful Islam",
  title: "Full-Stack Software Engineer",
  email: "ashraful.codesmith@gmail.com",
  phone: "+880 1675996598",
  location: "Dhaka, Bangladesh",
  website: "https://www.ashraful.uk",
  availability: "✦ Available for exciting opportunities ✦",
  bio: "Full-Stack Software Engineer specializing in React, Next.js, and Node.js ecosystems. I build scalable, production-ready applications with a focus on performance, clean architecture, and great user experience. Based in Dhaka — open to remote opportunities worldwide.",
  github: "https://github.com/Srabon444",
  linkedin: "https://www.linkedin.com/in/ashraful-islam-rabby/",
  discord: "https://discord.com/users/codesmmith01",
};

export const skills = {
  frontend: [
    "Next.js",
    "React.js",
    "Svelte",
    "Tauri",
    "TypeScript",
    "JavaScript",
    "Tailwind",
    "SASS",
    "Shadcn",
    "Ant Design",
    "Chakra UI",
    "Material UI",
    "Bootstrap",
    "Headless UI",
    "Radix UI",
    "TanStack Query",
    "RTK Query",
    "Zustand",
    "React Router",
    "Recharts",
    "Framer Motion",
    "GSAP",
  ],
  backend: [
    "Node.js",
    "Express",
    "NestJS",
    "Python",
    "FastAPI",
    "REST APIs",
    "JWT Authentication",
    "Socket.io",
    "Stripe",
    "Clerk",
  ],
  ai: [
    "Claude Code",
    "Codex",
    "Cursor",
    "OpenAI",
    "Gemini",
    "MCP",
    "RAG",
  ],
  databases: [
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "pgvector",
    "Redis",
    "Firebase",
    "Prisma",
    "Sequelize",
    "Supabase",
  ],
  devops: [
    "Docker",
    "Git",
    "Vercel",
    "Render",
    "Netlify",
    "Railway",
    "Coolify",
    "Digital Ocean",
    "Turborepo",
    "PM2",
  ],
  tools: [
    "GitHub",
    "Figma",
    "Postman",
    "Playwright",
    "ClickUp",
    "Notion",
    "Linux",
    "Prismic CMS",
    "Google Maps",
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Ambufast",
    description: "A comprehensive on-demand ambulance booking platform using Google Maps API — the largest ambulance booking platform in Bangladesh. Features include complete order lifecycle management, robust order management and user profiles, and a CMS for admins and call operators supporting ambulance bookings, payments, and billing operations.",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind", "Shadcn", "Zod", "Zustand", "TanStack Query", "React Hook Form", "Google Maps API", "Recharts", "ReactPDF"],
    image: "/images/ambufast.png",
    demoLink: "https://ambufast.com/",
    codeLink: "",
    work: true,
    hobby: false,
  },
  {
    id: 2,
    title: "JS Green Media",
    description: "A feature-rich, fully responsive landscaping service booking platform with a CMS for admins to manage website content, orders, and invoices efficiently. Includes a dynamic form builder to enable customizable forms on the website.",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind", "Shadcn", "Zod", "TanStack Query", "React Hook Form"],
    image: "/images/js-green.png",
    demoLink: "https://jsgreenmedia.com/",
    codeLink: "",
    work: true,
    hobby: false,
  },
  {
    id: 5,
    title: "Porashona",
    description: "AI study companion for Bangladeshi Class 11–12 students, in active development. A RAG tutor over NCTB curriculum documents (pgvector) that cites the page behind every answer, says \"not in the book\" when nothing matches, and checks calculations automatically. Students can bring their own Anthropic, OpenAI or Gemini key; admins get a shared key with a daily budget, usage and cost tracking, and an audit log. A Remotion pipeline turns textbook pages into narrated Bengali explainer videos that a person reviews before they go live.",
    technologies: ["FastAPI", "PostgreSQL", "pgvector", "RAG", "Anthropic API", "OpenAI API", "Gemini API", "Next.js", "Remotion"],
    image: "/images/porashona.png",
    demoLink: "https://youtu.be/xep1fDpQrZE",
    codeLink: "",
    work: false,
    hobby: true,
  },
  {
    id: 6,
    title: "Claude Auto-Resume",
    description: "VS Code extension, published on the Marketplace, that resumes Claude Code chats after a usage limit resets. Each chat gets its own timer; when it ends, \"continue\" is typed and sent in that chat. Key sending works on Windows, macOS, X11 and Wayland.",
    technologies: ["JavaScript", "VS Code Extension API", "Node.js"],
    image: "/images/claude-auto-resume.png",
    demoLink: "https://marketplace.visualstudio.com/items?itemName=ashraful.claude-auto-resume",
    codeLink: "https://github.com/Srabon444/claude-auto-resume",
    work: false,
    hobby: true,
  },
  {
    id: 3,
    title: "Team Timesheet",
    description: "Cross-platform internal tool for Techzu Ichicode, used by 20+ users, that auto-fills the company's Daily Timesheet Form. Ships as Chrome extension, Desktop (Windows/macOS/Linux), and Android apps sharing the same domain logic, with per-project timers, Fillout form automation, and cross-device sync via Google Drive.",
    technologies: ["Tauri", "Svelte", "TypeScript", "Chrome Extension API", "Google Drive API"],
    image: "/images/timesheet-1.png",
    demoLink: "",
    codeLink: "https://github.com/Srabon444/team-timesheet",
    work: false,
    hobby: true,
  },
  {
    id: 4,
    title: "MealFlow",
    description: "Cross-platform internal Techzu tool, used by 20+ users, for office meal ordering, tally, dues tracking, and cancel-approval workflow, with separate admin and user dashboards. One SvelteKit + Supabase codebase powers a live web app, Desktop apps (Linux/Windows via Tauri), and an Android app.",
    technologies: ["SvelteKit", "Supabase", "Tauri", "TypeScript"],
    image: "/images/mealflow-3.png",
    demoLink: "https://mealflow-zu.vercel.app/login",
    codeLink: "https://github.com/Srabon444/meal-flow",
    work: false,
    hobby: true,
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Engineer II",
    company: "Techzu Ichicode Pte Ltd",
    location: "Singapore",
    jobType: "Hybrid",
    period: "November 2025 – Present",
    description: [
      "ERP Platform (Team Lead): Build two SaaS ERP products on SAP Business One workflows for BDO clients in Singapore and lead a team of 5 developers on one of them; own task breakdown, technical decisions and code review for that project.",
      "Client Management: Primary technical contact for 2 BDO clients; run requirement meetings directly and turn procurement, accounting and service-contract processes into specs and delivery plans.",
      "AI-Augmented Engineering: Built the team's AI-assisted workflow on Claude Code, with custom agents for implementation, PR review, regression checks and E2E smoke tests; now used across the team, it automated code review and cut review time by over 70%.",
      "Standards & Hiring: Authored the team's reusable-code plan, the ERP testing strategy and its E2E scope; evaluate technical assessments for engineering hires.",
      "Performance Architecture: Replaced multi-table JOINs in the Item Master API with a two-phase paginated query and parallel sub-queries, cutting response time from ~8s to ~225ms (97%).",
      "Purchasing & Finance: Designed and delivered the Purchasing module across 6 document types (Purchase Request to Goods Return), with automated journal entries and GL determination feeding the financial statements.",
      "Platform Engineering: Built shared pieces the team reuses: a config-driven reporting engine, a cron scheduler with cross-replica locking, and configurable rate limiting on public endpoints.",
    ],
    technologies: ["React.js", "TypeScript", "JavaScript", "Ant Design", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Docker", "Git"],
  },
  {
    id: 2,
    role: "Full-Stack Software Engineer",
    company: "Tech Analytica Limited",
    location: "Dhaka, Bangladesh",
    jobType: "Onsite",
    period: "August 2024 – September 2025",
    description: [
      "Ambufast (Project Lead): Led end-to-end delivery of Bangladesh's largest ambulance booking platform, with Google Maps routing and the full booking → dispatch → billing → payment lifecycle.",
      "Operations CMS: Built the admin and call-operator CMS for bookings, payments and billing, raising operational efficiency by 40%.",
      "JS Green Media: Delivered a landscaping booking platform with a dynamic form builder and admin CMS, cutting missed client inquiries by 50%.",
      "Performance & SEO: Reduced API call overhead by 25% through caching and leaner data handling; page loads 35% faster.",
      "Mentorship & Delivery: Mentored a junior developer through task planning and code review; kept a 94% on-schedule delivery rate.",
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "JavaScript", "Shadcn", "Tailwind CSS", "Recharts", "Zustand", "TanStack Query", "NestJS", "Prisma", "Google Maps API", "Docker", "Git"],
  },
  {
    id: 3,
    role: "Software Developer",
    company: "RISIDIO",
    location: "London, UK",
    jobType: "Remote",
    isContract: true,
    period: "June 2024 – July 2024",
    description: [
      "Codebase Overhaul: Improved performance and readability of a Next.js codebase for a UK blockchain and digital collectibles client; cut codebase size by 15% through Tailwind refactoring and component consolidation.",
      "Content & Stability: Ran content updates through Prismic CMS and fixed critical bugs ahead of release.",
    ],
    technologies: ["Next.js", "React.js", "JavaScript", "TypeScript", "SASS", "Tailwind", "Prismic", "HTML", "CSS"],
  },
  {
    id: 4,
    role: "Jr. Full-Stack Developer",
    company: "GALAXY-NET BD",
    location: "Dhaka, Bangladesh",
    jobType: "Onsite",
    period: "January 2023 – March 2024",
    description: [
      "Client Projects: Built React frontends and Node.js, Express, MongoDB and Firebase APIs across multiple client projects, covering auth, data management and third-party integrations.",
      "Process: Introduced Agile sprints to the team, cutting development cycle time by 25%.",
    ],
    technologies: ["React.js", "JavaScript", "TypeScript", "Bootstrap", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind"],
  },
];

export const educations: Education[] = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "UNITED INTERNATIONAL UNIVERSITY (UIU)",
    period: "Graduated August 2021",
    description: "",
  },
];