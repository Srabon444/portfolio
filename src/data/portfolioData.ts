
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
  gitlab: "https://gitlab.com/users/srabon444/starred",
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
    "REST APIs",
    "JWT Authentication",
    "Socket.io",
    "Stripe",
    "Clerk",
  ],
  databases: [
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
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
    id: 3,
    title: "Team Timesheet",
    description: "Cross-platform internal tool for Techzu Ichicode that auto-fills the company's Daily Timesheet Form. Ships as Chrome extension, Desktop (Windows/macOS/Linux), and Android apps sharing the same domain logic, with per-project timers, Fillout form automation, and cross-device sync via Google Drive.",
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
    description: "Cross-platform internal Techzu tool for office meal ordering, tally, dues tracking, and cancel-approval workflow, with separate admin and user dashboards. One SvelteKit + Supabase codebase powers a live web app, Desktop apps (Linux/Windows via Tauri), and an Android app.",
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
    jobType: "Remote",
    period: "November 2025 – Present",
    description: [
      "Building and maintaining SaaS ERP solutions for Kimly and GoldLite Singapore, based on SAP Business One, working across frontend, backend, database, and business-critical ERP workflows",
    
      "Acting as a primary technical point of contact for clients, gathering and translating business requirements into technical solutions and coordinating with the development team for implementation",
      
      "Leading a team of 5 developers and serving as primary code reviewer for the Kimly project — coordinating development work, reviewing implementations, and guiding technical decisions across the team", 
      
      "Architected a two-phase pagination strategy for the Item Master API, reducing response time from ~8s to ~225ms — a 97% improvement", 
      
      "Designed and delivered a complete Purchasing module based on SAP Business One workflows, covering Purchase Requests, Purchase Orders, GRPO, AP Invoices, AP Credit Memos, and Goods Returns, including backend journal entry generation and GL determination", 
      
      "Designed a reusable Purchase Reporting engine supporting multiple document types, advanced filtering, and Excel exports",
      
      "Built a reusable cron scheduler engine with cross-replica locking to prevent duplicate job execution, powering automated Service Contract lifecycle transitions and renewal reminder emails", 
      
      "Implemented configurable rate limiting on unauthenticated endpoints to harden the API against brute-force/abuse"
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
      "Led development of Bangladesh's largest ambulance booking platform — integrated Google Maps SDK with real-time routing and built the full order lifecycle (booking → dispatch → billing → payment).",
      "Built a custom CMS for admins and call operators to manage bookings, payments, and billing operations, improving overall operational efficiency by 40%.",
      "Delivered a fully responsive landscaping service booking platform with a dynamic form builder and admin CMS, reducing missed client inquiries by 50%.",
      "Reduced API call overhead by 25% through strategic caching and data handling; boosted SEO performance resulting in 35% faster page loads.",
      "Supervised and mentored a junior developer; maintained a 94% on-schedule project delivery rate across all engagements.",
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
      "Improved functionality, performance, and code readability of an existing Next.js codebase for a UK-based blockchain and digital collectibles client.",
      "Reduced overall codebase size by 15% through Tailwind CSS refactoring, component consolidation, and elimination of redundant styles.",
      "Managed content population and data updates via Prismic CMS; resolved critical bugs ensuring a stable, production-ready user experience.",
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
      "Built scalable, responsive front-end interfaces using React.js, Tailwind CSS, and TypeScript across multiple client projects.",
      "Developed RESTful backend APIs with Node.js, Express, MongoDB, and Firebase — handling authentication, data management, and third-party integrations.",
      "Introduced Agile practices and sprint workflows to the team, reducing development cycle time by 25% and improving delivery predictability.",
      "Collaborated closely with UX designers to ensure pixel-accurate implementation and consistent cross-browser design delivery.",
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