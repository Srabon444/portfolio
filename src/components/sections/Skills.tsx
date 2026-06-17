"use client";

import { useState } from "react";
import { skills } from "@/data/portfolioData";
import Container from "../shared/Container";
import SmoothScrollReveal from "../shared/SmoothScrollReveal";
import SectionHeader from "../shared/SectionHeader";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SIMPLEICON = "https://cdn.simpleicons.org";

const deviconMap: Record<string, string> = {
  "Next.js": "nextjs/nextjs-original",
  "React.js": "react/react-original",
  "TypeScript": "typescript/typescript-original",
  "JavaScript": "javascript/javascript-original",
  "Tailwind": "tailwindcss/tailwindcss-original",
  "SASS": "sass/sass-original",
  "Ant Design": "antdesign/antdesign-original",
  "Material UI": "materialui/materialui-original",
  "Bootstrap": "bootstrap/bootstrap-original",
  "React Router": "reactrouter/reactrouter-original",
  "Node.js": "nodejs/nodejs-original",
  "Express": "express/express-original",
  "NestJS": "nestjs/nestjs-original",
  "Socket.io": "socketio/socketio-original",
  "MongoDB": "mongodb/mongodb-original",
  "Mongoose": "mongodb/mongodb-original",
  "PostgreSQL": "postgresql/postgresql-original",
  "Redis": "redis/redis-original",
  "Firebase": "firebase/firebase-original",
  "Prisma": "prisma/prisma-original",
  "Sequelize": "sequelize/sequelize-original",
  "Docker": "docker/docker-original",
  "Git": "git/git-original",
  "GitHub": "github/github-original",
  "Figma": "figma/figma-original",
  "Postman": "postman/postman-original",
  "Linux": "linux/linux-original",
  "Digital Ocean": "digitalocean/digitalocean-original",
};

const simpleiconMap: Record<string, string> = {
  "Vercel": "vercel",
  "Netlify": "netlify",
  "Supabase": "supabase",
  "Railway": "railway",
  "Render": "render",
  "Coolify": "coolify",
  "Turborepo": "turborepo",
  "Framer Motion": "framer",
  "GSAP": "greensock",
  "Chakra UI": "chakraui",
  "Shadcn": "shadcnui",
  "TanStack Query": "reactquery",
  "RTK Query": "redux",
  "Recharts": "recharts",
  "Radix UI": "radixui",
  "Stripe": "stripe",
  "Clerk": "clerk",
  "PM2": "pm2",
  "Notion": "notion",
  "Prismic CMS": "prismic",
  "Google Maps": "googlemaps",
  "Headless UI": "headlessui",
  "Zustand": "zustand",
  "JWT Authentication": "jsonwebtokens",
};

// Black-only simpleicons that need dark:invert
const monochromeSimple = new Set([
  "vercel", "railway", "turborepo", "notion", "headlessui",
]);

// Readable abbreviations for skills with no CDN icon
const abbrevMap: Record<string, string> = {
  "REST APIs": "API",
};

const categories = [
  { label: "Frontend", skills: skills.frontend },
  { label: "Backend", skills: skills.backend },
  { label: "Databases", skills: skills.databases },
  { label: "DevOps", skills: skills.devops },
  { label: "Tools", skills: skills.tools },
];

function SkillCard({ skill }: { skill: string }) {
  const [failed, setFailed] = useState(false);
  const deviconSlug = deviconMap[skill];
  const simpleslug = simpleiconMap[skill];
  const hasIcon = (deviconSlug || simpleslug) && !failed;
  const abbr = abbrevMap[skill] ?? skill.replace(/[^a-zA-Z0-9]/g, "").substring(0, 2).toUpperCase();

  const src = deviconSlug
    ? `${DEVICON}/${deviconSlug}.svg`
    : `${SIMPLEICON}/${simpleslug}`;

  const imgClass = `w-9 h-9 object-contain${
    !deviconSlug && simpleslug && monochromeSimple.has(simpleslug) ? " dark:invert" : ""
  }`;

  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-card border border-transparent hover:border-primary/40 transition-all duration-200 cursor-default group">
      {hasIcon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={skill}
          width={36}
          height={36}
          className={imgClass}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-[11px] font-bold leading-none">
          {abbr}
        </div>
      )}
      <span className="text-[11px] text-muted-foreground text-center leading-tight group-hover:text-foreground transition-colors duration-150">
        {skill}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <Container>
        <SmoothScrollReveal>
          <SectionHeader
            eyebrow="Tech Stack"
            title="Skills & Tools"
            description="Technologies and tools I use to build production-ready products."
          />
        </SmoothScrollReveal>

        <div className="space-y-10">
          {categories.map((cat, catIndex) => (
            <SmoothScrollReveal key={cat.label} delay={catIndex * 0.06} duration={0.45}>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-3">
                  <span>{cat.label}</span>
                  <span className="flex-1 h-px bg-border" />
                </h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
                  {cat.skills.map((skill) => (
                    <SkillCard key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </SmoothScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
