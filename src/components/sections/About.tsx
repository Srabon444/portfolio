"use client";

import { personalInfo, skills } from "@/data/portfolioData";
import Container from "../shared/Container";
import SmoothScrollReveal from "../shared/SmoothScrollReveal";
import Link from "next/link";
import ContactButton from "../shared/ContactButton";

export default function About() {
  // Core values that represent your technical philosophy
  const coreValues = [
    {
      title: "Clean Architecture",
      description: "I believe in writing maintainable, scalable code that follows solid architectural principles.",
      icon: (
        <svg className="w-8 h-8 mb-2 text-primary dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      )
    },
    {
      title: "User-Centered Design",
      description: "I create applications with users in mind, focusing on accessibility, usability, and delightful experiences.",
      icon: (
        <svg className="w-8 h-8 mb-2 text-primary dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      )
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly. I stay current with emerging trends and best practices through constant learning.",
      icon: (
        <svg className="w-8 h-8 mb-2 text-primary dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <Container>
        <SmoothScrollReveal className="mb-12 text-center" duration={0.5}>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-24 bg-primary dark:bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here you&apos;ll find more information about me, my current role, and my approach to software engineering.
          </p>
        </SmoothScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <SmoothScrollReveal direction="left" delay={0.2} duration={0.5} className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Get to know me!</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I&apos;m a <strong>{personalInfo.title}</strong> with a passion for creating
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
                When I&apos;m not coding, you can find me exploring new technologies,
                writing technical blog, and sharing knowledge with the
                developer community.
              </p>
              <div className="pt-4">
                <ContactButton text="Contact Me" />
              </div>
            </div>
          </SmoothScrollReveal>

          <SmoothScrollReveal direction="right" delay={0.3} duration={0.5} className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Technical Philosophy</h3>
            
            <div className="space-y-6">
              {coreValues.map((value, index) => (
                <SmoothScrollReveal 
                  key={index}
                  duration={0.4}
                  delay={0.4 + (index * 0.1)}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-4">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                  </div>
                </SmoothScrollReveal>
              ))}
            </div>
            
            <div className="pt-4 flex justify-between items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Currently {personalInfo.availability}
              </p>
              <Link
                href="/Ashraful_Islam_Resume.pdf"
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
          </SmoothScrollReveal>
        </div>
      </Container>
    </section>
  );
}