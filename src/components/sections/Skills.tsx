"use client";

import { skills } from "@/data/portfolioData";
import Container from "../shared/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const skillCategories = [
    { title: "Frontend Development", skills: skills.frontend },
    { title: "Backend Development", skills: skills.backend },
    { title: "Tools & Technologies", skills: skills.tools },
  ];
    // Skills with their respective icons - using more reliable icon sources
  const skillIconMap: Record<string, string> = {
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",    "SASS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express": "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    // "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "Shadcn": "https://avatars.githubusercontent.com/u/124599?s=200&v=4",    "Zustand": "https://zustand-demo.pmnd.rs/favicon.ico",
    "TanStack Query": "https://tanstack.com/assets/logo-color-100w-br5_Ikqp.png",
    "Prisma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    "Recharts": "https://recharts.org/en-US/img/logo.svg",
    // "Heroku": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    "Vercel": "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
    "NestJS": "https://nestjs.com/img/logo-small.svg",
    "JWT": "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",    "Digital Ocean": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
    "Google Maps": "https://cdn.worldvectorlogo.com/logos/google-maps-2020-icon.svg",
    "Postman": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    "Prismic CMS": "https://europe1.discourse-cdn.com/flex013/uploads/prismic/original/2X/7/7086bbd2c3e421b63d3bed1807673482ca9674e4.png",
    // Add more skills with their respective icon URLs as needed
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Tech Stacks</h2>
          <div className="h-1 w-24 bg-primary dark:bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tools & Technologies I Work With
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {Object.entries(skillIconMap).map(([skill, iconUrl], index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-primary/20 hover:border-primary transition-all hover:-translate-y-1 text-center"
            >              <div className="h-12 flex items-center justify-center mb-2">
                <img
                  src={iconUrl}
                  alt={skill}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    // Replace with a generic tech icon or first letter of skill
                    target.parentElement!.innerHTML = `<div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span class="text-lg font-bold text-primary">${skill.charAt(0)}</span>
                    </div>`;
                  }}
                />
              </div>
              <p className="text-sm text-primary dark:text-primary/80">{skill}</p>
            </motion.div>
          ))}

          {/* For skills without icons, display them in a grid */}
          {[...skills.frontend, ...skills.backend, ...skills.tools]
            .filter(skill => !skillIconMap[skill])
            .map((skill, index) => (
              <motion.div
                key={`no-icon-${skill}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (Object.keys(skillIconMap).length + index) * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-primary/20 hover:border-primary transition-all hover:-translate-y-1 text-center"
              >
                <div className="h-12 flex items-center justify-center mb-2">
                  {/* Placeholder for skills without icons */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl text-primary">💻</span>
                  </div>
                </div>
                <p className="text-sm text-primary dark:text-primary/80">{skill}</p>
              </motion.div>
            ))}
        </div>
      </Container>
    </section>
  );
}