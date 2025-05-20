"use client";

import { experiences, educations, Experience as ExperienceType, Education as EducationType } from "@/data/portfolioData";
import Container from "../shared/Container";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactButton from "../shared/ContactButton";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
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

        <div className="flex justify-center mb-10">
          {/* Improved tab buttons with better contrast in dark mode */}
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1.5 shadow-md">
            <button
              onClick={() => setActiveTab("work")}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                activeTab === "work"
                  ? "bg-white dark:bg-gray-700 shadow-sm text-primary dark:text-white font-bold" // Improved contrast for active tab
                  : "text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600" // Better visibility for inactive tab
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                activeTab === "education"
                  ? "bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          {activeTab === "work" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {experiences.map((experience, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={experience.id}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700"
                  onMouseEnter={() => setHoveredItem(experience.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div 
                    className={`absolute left-[-9px] top-0 h-5 w-5 rounded-full bg-primary dark:bg-primary ring-4 ring-white dark:ring-gray-900 transition-all duration-300 ${
                      hoveredItem === experience.id ? 'scale-125' : ''
                    }`}
                  ></div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Period tag with improved visibility in dark mode */}
                    <span className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 dark:bg-primary/30 text-primary dark:text-white font-bold mb-3 border border-primary/20 dark:border-primary/40">
                      {experience.period}
                    </span>
                      {/* Job type badge */}
                    <span className={`ml-2 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                      experience.jobType === "Remote" 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-200 dark:border-emerald-800/70" 
                        : "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/50 dark:text-indigo-200 dark:border-indigo-800/70"
                    }`}>
                      {experience.jobType === "Remote" ? (
                        <>
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                          </svg>
                          Remote
                        </>
                      ) : (
                        <>
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                          </svg>
                          Onsite
                        </>
                      )}
                    </span>
                    
                    {/* Contract badge - shown only for entries with isContract property */}
                    {experience.isContract && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/50 dark:text-purple-200 dark:border-purple-800/70">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        Contract
                      </span>
                    )}
                    
                    <h3 className="text-xl font-semibold mb-1 mt-2">{experience.role}</h3>
                    <div className="flex items-start">
                      <div className="flex-grow">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{experience.company}</p>
                      </div>
                      
                      {/* Location with icon */}
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {experience.location}
                      </div>
                    </div>
                    
                    <div className="mt-4 mb-4 text-gray-600 dark:text-gray-300">
                      {experience.description}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {educations.map((education, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={education.id}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700"
                  onMouseEnter={() => setHoveredItem(education.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div 
                    className={`absolute left-[-9px] top-0 h-5 w-5 rounded-full bg-blue-500 dark:bg-blue-400 ring-4 ring-white dark:ring-gray-900 transition-all duration-300 ${
                      hoveredItem === education.id ? 'scale-125' : ''
                    }`}
                  ></div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Improved education period visibility in dark mode */}
                    <span className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-white font-bold mb-3 border border-blue-200 dark:border-blue-700">
                      {education.period}
                    </span>
                    
                    <h3 className="text-xl font-semibold mb-1">{education.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{education.institution}</p>
                    
                    {education.description && (
                      <p className="mb-3 text-gray-600 dark:text-gray-300">
                        {education.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Education achievements and certifications - could be expanded in the future */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl shadow-sm"
              >
                <h4 className="text-lg font-medium mb-2">Continuous Learning</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  I believe in lifelong learning and regularly enhance my skills through online courses, 
                  workshops, and contributing to open-source projects.
                </p>
              </motion.div>
            </motion.div>
          )}
          
          {/* Call to action at the end of the section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-14 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-800/70 p-8 rounded-2xl shadow-sm"
          >
            <h4 className="text-xl font-semibold mb-3">Let&apos;s Work Together</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-5 max-w-xl mx-auto">
              Want to discuss how my experience can help with your project? I&apos;m always open to new opportunities and collaborations.
            </p>
            <div className="flex justify-center">
              <ContactButton text="Get In Touch" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}