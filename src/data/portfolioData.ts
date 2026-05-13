
// Interfaces
export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  jobType: string;
  isContract?: boolean;
  period: string;
  description: string;
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
  bio: "An ambivert and lifelong learner accidentally became a software engineer (turns out, I kinda love it). I’m always chasing the next cool thing to build — from pixel-perfect UIs to backend magic. Fueled by coffee, curiosity, and late-night code sessions.",
  gitlab: "https://gitlab.com/users/srabon444/starred",
  github: "https://github.com/Srabon444",
  linkedin: "https://www.linkedin.com/in/ashraful-islam-rabby/",
};

export const skills = {
  frontend: [
    "Next.js",
    "React.js",
    "TypeScript",
    "JavaScript",
    "Shadcn",
    "Ant Design",
    "Tailwind",
    "HTML",
    "CSS",
    "SASS",
    "TanStack Query",
    "Zustand",
    "Zod",
    "Recharts",
  ],
  backend: ["Node.js", "Express", "NestJS", "Firebase", "JWT", "MongoDB", "Prisma", "Sequelize", "PostgreSQL"],
  tools: [
    "GitHub",
    "Figma",
    "Docker",
    "Digital Ocean",
    "Vercel",
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
    title: "Shipido",
    description: "An inventory management system with JWT-based authentication. Features include a dashboard for stock, categories, clients, suppliers, sales, purchases, and low-stock alerts. Manages products (add, edit, delete), client and employee records, and invoice generation.",
    technologies: ["React.js", "Axios", "Material UI", "React Firebase Hooks", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/images/shipido.png",
    demoLink: "https://jozzby-92a66.web.app/",
    codeLink: "",
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
    description: "Developing a robust ERP solution for a Fortune 500 client. Architected a two-phase paginated query strategy for the Item Master API, replacing multi-table JOINs with parallel sub-queries — reducing response time from 8s to ~225ms (97% improvement). Built a full-stack Purchasing module spanning 6 document types (Purchase Request, Purchase Order, GRPO, AP Invoice, AP Credit Memo, Goods Return) with backend journal entry generation that reflects directly in financial statements. Designed Purchase Reporting across 5 document types with multi-dimensional filtering and Excel export, built as a shared config-driven engine reused across all report variants.",
    technologies: ["React.js", "TypeScript", "JavaScript", "Ant Design", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Docker", "Git"],
  },
  {
    id: 2,
    role: "Full-Stack Software Engineer",
    company: "Tech Analytica Limited",
    location: "Dhaka, Bangladesh",
    jobType: "Onsite",
    period: "August 2024 – September 2025",
    description: "Developed Bangladesh's largest ambulance booking platform, integrating Google Maps SDK with optimized routing. Built the complete order lifecycle (booking → dispatch → billing → payment), improving operational efficiency by 40% through a custom CMS. Reduced API call overhead by 25% via enhanced data handling and caching. Boosted SEO performance resulting in 35% faster page loads. Supervised and mentored a junior developer. Also built a SEO-optimized landscaping booking system that cut inquiries by 50% and boosted engagement. Maintained a 94% on-schedule project delivery rate.",
    technologies: ["Next.js", "React.js", "TypeScript", "JavaScript", "Shadcn", "Tailwind CSS", "Recharts", "Zod", "Zustand", "TanStack Query", "NestJS", "Prisma", "Google Maps API", "Docker", "Git"],
  },  {
    id: 3,
    role: "Software Developer",
    company: "RISIDIO",
    location: "London, UK",
    jobType: "Remote",
    isContract: true,
    period: "June 2024 - July 2024",
    description: "Improved functionality, performance, and readability of existing codebase. Managed data updates in Prismic CMS for efficient content population. Reduced codebase size by 15% through Tailwind CSS optimization. Debugged and resolved key issues for stable user experience.",
    technologies: ["Next.js", "React.js", "JavaScript", "TypeScript", "SASS", "Tailwind", "Prismic", "HTML", "CSS"],
  },
  {
    id: 4,
    role: "Jr. Full-Stack Developer",
    company: "GALAXY-NET BD",
    location: "Dhaka, Bangladesh",
    jobType: "Onsite",
    period: "January 2023 – March 2024",
    description: "Built scalable, responsive front-end applications using React.js and Tailwind. Developed back-end APIs with Node.js, Express, MongoDB, and Firebase. Conducted manual testing and introduced Agile practices that reduced development time by 25%. Collaborated with UX and development teams for design alignment.",
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