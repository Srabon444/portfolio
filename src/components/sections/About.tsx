"use client";

import { personalInfo, experiences, educations } from "@/data/portfolioData";
import Container from "../shared/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "../shared/ContactButton";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-24 bg-primary dark:bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here you'll find more information about me, my current role, and my skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Get to know me!</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a <strong>Full Stack Developer</strong> with a passion for creating 
                beautiful, functional, and user-centered digital experiences. I am 
                always striving to learn new technologies and stay ahead in this 
                fast-paced industry.
              </p>
              <p>
                Based in {personalInfo.location}, I work on a wide range of projects, 
                from small business websites to complex web applications with advanced 
                functionality. I enjoy solving problems and creating efficient solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, and sharing knowledge with the 
                developer community.
              </p>
              <div className="pt-4">
                <ContactButton text="Contact Me" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Experience & Education</h3>
            
            <div className="space-y-6">
              {experiences.slice(0, 2).map((experience) => (
                <div key={experience.id} className="border-l-2 border-primary dark:border-primary pl-4">
                  <h4 className="text-lg font-medium">{experience.role}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{experience.company} | {experience.period}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{experience.description}</p>
                </div>
              ))}
              
              {educations.slice(0, 1).map((education) => (
                <div key={education.id} className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                  <h4 className="text-lg font-medium">{education.degree}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{education.institution} | {education.period}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{education.description}</p>
                </div>
              ))}
            </div>
            
            <div>
              <Link
                href="https://drive.google.com/file/d/1YOl-_xifAZeF5UYEbrZux1j4x2q2vcmj/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}