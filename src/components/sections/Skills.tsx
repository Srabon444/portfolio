"use client";

import { skills } from "@/data/portfolioData";
import Container from "../shared/Container";
import SmoothScrollReveal from "../shared/SmoothScrollReveal";

const skillIconMap: Record<string, string> = {
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "SASS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express": "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg",
  "NestJS": "https://nestjs.com/img/logo-small.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Shadcn": "https://avatars.githubusercontent.com/u/124599?s=200&v=4",
  "Ant Design": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
  "Chakra UI": "https://avatars.githubusercontent.com/u/54212428?s=200&v=4",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Zustand": "https://zustand-demo.pmnd.rs/favicon.ico",
  "TanStack Query": "https://avatars.githubusercontent.com/u/72518640?s=200&v=4",
  "Zod": "https://zod.dev/logo.svg",
  "Prisma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  "Recharts": "https://avatars.githubusercontent.com/u/32576418?s=200&v=4",
  "Vercel": "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
  "Render": "https://cdn.simpleicons.org/render",
  "Coolify": "https://cdn.simpleicons.org/coolify",
  "JWT": "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
  "Digital Ocean": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
  "Google Maps": "https://cdn.worldvectorlogo.com/logos/google-maps-2020-icon.svg",
  "Prismic CMS": "https://europe1.discourse-cdn.com/flex013/uploads/prismic/original/2X/7/7086bbd2c3e421b63d3bed1807673482ca9674e4.png",
  "Sequelize": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
};

function SkillIcon({ name }: { name: string }) {
  const url = skillIconMap[name];
  if (!url) {
    return (
      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
        {name.charAt(0)}
      </div>
    );
  }
  return (
    <img
      src={url}
      alt={name}
      className="w-8 h-8 object-contain"
      loading="lazy"
      onError={(e) => {
        const t = e.target as HTMLImageElement;
        t.onerror = null;
        t.style.display = "none";
        const fallback = document.createElement("div");
        fallback.className =
          "w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary text-xs font-bold";
        fallback.textContent = name.charAt(0);
        t.parentElement?.appendChild(fallback);
      }}
    />
  );
}

const categories = [
  { label: "Frontend", skills: skills.frontend },
  { label: "Backend", skills: skills.backend },
  { label: "Tools & DevOps", skills: skills.tools },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <Container>
        <SmoothScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary flex-shrink-0" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Skills
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Tech Stack</h2>
          <p className="text-muted-foreground text-[15px] max-w-xl">
            Tools &amp; technologies I work with on a daily basis.
          </p>
        </SmoothScrollReveal>

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <SmoothScrollReveal key={category.label} delay={catIndex * 0.1} duration={0.5}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="text-sm font-semibold text-foreground">{category.label}</h3>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground">{category.skills.length}</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5">
                  {category.skills.map((skill, index) => (
                    <SmoothScrollReveal
                      key={skill}
                      delay={catIndex * 0.1 + index * 0.025}
                      duration={0.35}
                    >
                      <div className="bg-card rounded-xl p-3 border border-border hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-center flex flex-col items-center gap-2">
                        <SkillIcon name={skill} />
                        <p className="text-[11px] text-muted-foreground font-medium leading-tight">
                          {skill}
                        </p>
                      </div>
                    </SmoothScrollReveal>
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
