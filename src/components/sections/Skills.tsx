"use client";

import { skills } from "@/data/portfolioData";
import Container from "../shared/Container";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    { title: "Frontend Development", skills: skills.frontend, icon: "🎨" },
    { title: "Backend Development", skills: skills.backend, icon: "⚙️" },
    { title: "Tools & Technologies", skills: skills.tools, icon: "🔧" },
  ];

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
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-24 bg-primary dark:bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with on a daily basis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}