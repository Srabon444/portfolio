"use client";

import { experiences, educations } from "@/data/portfolioData";
import Container from "../shared/Container";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactButton from "../shared/ContactButton";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  
  return (
    <section id="experience" className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <div className="h-1 w-24 bg-primary dark:bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("work")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "work"
                  ? "bg-white dark:bg-gray-700 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "education"
                  ? "bg-white dark:bg-gray-700 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Work Experience */}
          {activeTab === "work" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {experiences.map((experience, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={experience.id}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700"
                >
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary dark:bg-primary ring-2 ring-white dark:ring-gray-900"></div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                    <span className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground mb-2 border border-primary/20 dark:border-primary/30">
                      {experience.period}
                    </span>
                    
                    <h3 className="text-xl font-semibold mb-1">{experience.role}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{experience.company}</p>
                    
                    <p className="mb-3 text-gray-600 dark:text-gray-300">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Education */}
          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {educations.map((education, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={education.id}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700"
                >
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-blue-500 dark:bg-blue-400 ring-2 ring-white dark:ring-gray-900"></div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                    <span className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 mb-2 border border-blue-200 dark:border-blue-800/70">
                      {education.period}
                    </span>
                    
                    <h3 className="text-xl font-semibold mb-1">{education.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{education.institution}</p>
                    
                    <p className="mb-3 text-gray-600 dark:text-gray-300">
                      {education.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {/* Call to action at the end of the section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Want to discuss how my experience can help with your project?
            </p>
            <div className="flex justify-center">
              <ContactButton text="Let's Talk" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}