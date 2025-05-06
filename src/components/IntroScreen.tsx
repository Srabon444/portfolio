"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const IntroScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentTech, setCurrentTech] = useState(0);
  
  // Hardcoded technologies array
  const allTechnologies = [
    "Next.js",
    // "React.js",
    "TypeScript",
    "Tailwind",
    "Node.js",
    // "MongoDB",
    "Express",
    "NestJS",
    "Prisma",
    // "TanStack Query"
  ];
  
  useEffect(() => {
    let techIndex = 0;
    const techInterval = setInterval(() => {
      if (techIndex < allTechnologies.length - 1) {
        techIndex++;
        setCurrentTech(techIndex);
      } else {
        // Stop the interval once we've gone through all technologies once
        clearInterval(techInterval);
        // Complete the intro immediately once all technologies have been shown
        onComplete();
      }
    }, 400); // Change technology every 400ms

    return () => {
      clearInterval(techInterval);
    };
  }, [onComplete, allTechnologies.length]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ 
        y: "100%", 
        opacity: 0,
        transition: { duration: 1, ease: "easeInOut" } 
      }}
    >
      <div className="text-center">
        <motion.div 
          className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-primary-foreground dark:to-blue-300">
            M I
          </span>
        </motion.div>
        
        <motion.div 
          className="h-20 overflow-hidden text-xl md:text-3xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flip-container">
            {allTechnologies.map((tech, index) => (
              <div
                key={tech}
                className={`flip-item ${currentTech === index ? "active" : ""}`}
                style={{ 
                  transform: `translateY(${(index - currentTech) * 100}%)`,
                  opacity: currentTech === index ? 1 : 0.3
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroScreen;