"use client";

import { useEffect, useRef, useState } from "react";

const allTechnologies = [
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Express",
  "NestJS",
  "Prisma",
];

const IntroScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let techIndex = 0;
    const interval = setInterval(() => {
      if (techIndex < allTechnologies.length - 1) {
        techIndex++;
        setCurrentTech(techIndex);
      } else {
        clearInterval(interval);
        setIsExiting(true);
        // Wait for slide-out CSS animation then unmount
        setTimeout(onComplete, 900);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background ${
        isExiting ? "intro-exit" : ""
      }`}
      style={{ animation: isExiting ? "introSlideOut 0.9s ease-in-out forwards" : undefined }}
    >
      <style>{`
        @keyframes introSlideOut {
          from { transform: translateY(0); opacity: 1; }
          to   { transform: translateY(100%); opacity: 0; }
        }
        @keyframes introFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes introFadeInDelay {
          0%   { opacity: 0; }
          40%  { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>

      <div className="text-center">
        <div
          className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter"
          style={{ animation: "introFadeIn 0.5s ease forwards" }}
        >
          <span className="text-primary">M I</span>
        </div>

        <div
          className="h-20 overflow-hidden text-xl md:text-3xl text-muted-foreground"
          style={{ animation: "introFadeInDelay 0.8s ease forwards" }}
        >
          <div className="flip-container">
            {allTechnologies.map((tech, index) => (
              <div
                key={tech}
                className="flip-item"
                style={{
                  transform: `translateY(${(index - currentTech) * 100}%)`,
                  opacity: currentTech === index ? 1 : 0.25,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
