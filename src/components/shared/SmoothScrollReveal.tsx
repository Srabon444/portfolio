"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface SmoothScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
}

/**
 * SmoothScrollReveal component optimized to work with custom smooth scrolling implementation
 */
export default function SmoothScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 20,
  duration = 0.6,
  once = true,
  className = "",
  threshold = 0.1, // Default threshold - how much of the element needs to be visible
}: SmoothScrollRevealProps) {
  const [mounted, setMounted] = useState(false);
  
  // Only run animations after component is mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Initial SSR render or before hydration - return without animations
    return <div className={className}>{children}</div>;
  }

  // Set initial animation values based on direction
  const getInitialProps = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 };
      case "down":
        return { y: -distance, opacity: 0 };
      case "left":
        return { x: -distance, opacity: 0 };
      case "right":
        return { x: distance, opacity: 0 };
      case "none":
        return { opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  // Define animation options
  const animationOptions = {
    initial: getInitialProps(),
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { 
      once,
      margin: "-5% 0px -5% 0px", // Trigger animations slightly before elements enter viewport
      amount: threshold, // How much of element needs to be visible to trigger
    },
    transition: {
      duration,
      delay,
      ease: "easeOut", // Simple easing function
      type: "tween", // Use tween instead of spring to avoid conflicts
    },
  };

  return (
    <motion.div 
      className={className} 
      {...animationOptions}
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </motion.div>
  );
}