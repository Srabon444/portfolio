"use client";

import { useRef, useEffect, useState } from "react";

interface ScrollWrapperProps {
  children: React.ReactNode;
  speed?: number; // Scroll speed factor (lower = smoother, higher = faster)
}

export default function ScrollWrapper({ 
  children, 
  speed = 0.1 // Default scroll smoothness 
}: ScrollWrapperProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [scrollY, setScrollY] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [documentHeight, setDocumentHeight] = useState(0);
  
  // Store scroll position and target in refs to avoid re-renders
  const currentScrollYRef = useRef(0);
  const targetScrollYRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const isScrollingRef = useRef(false);

  // Initialize smooth scrolling
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Set initial height
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setDocumentHeight(height);
      document.body.style.height = `${height}px`;
    }

    // Initialize scroll position
    currentScrollYRef.current = window.scrollY;
    targetScrollYRef.current = window.scrollY;
    setScrollY(window.scrollY);
    
    // Custom smooth scroll loop
    const smoothScroll = () => {
      // Calculate delta between current and target position
      const delta = targetScrollYRef.current - currentScrollYRef.current;
      
      // If delta is very small, snap to position to avoid micro-movements
      if (Math.abs(delta) < 0.1) {
        currentScrollYRef.current = targetScrollYRef.current;
      } else {
        // Smooth lerp (linear interpolation) scrolling
        currentScrollYRef.current += delta * speed;
      }
      
      // Apply the scroll position to the content container
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.transform = 
          `translate3d(0, ${-currentScrollYRef.current}px, 0)`;
      }
      
      // Update state (for components that need the scroll position)
      setScrollY(currentScrollYRef.current);
      
      // Continue animation loop
      animationFrameRef.current = requestAnimationFrame(smoothScroll);
    };

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(smoothScroll);
    
    // Update target scroll position on window scroll
    const handleScroll = () => {
      targetScrollYRef.current = window.scrollY;
      isScrollingRef.current = true;
    };

    // Update heights when window resizes or content changes
    const updateHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.scrollHeight;
        setDocumentHeight(height);
        document.body.style.height = `${height}px`;
      }
    };
    
    // Create ResizeObserver to track content size changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }
    
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateHeight);

    // Set ready state
    setIsReady(true);
    
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeight);
      resizeObserver.disconnect();
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      // Reset body height
      document.body.style.height = "auto";
    };
  }, [speed]);

  // Add scrollTo method to window to support smooth scrolling to anchors
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Add custom scrollTo method to Window object
    const originalScrollTo = window.scrollTo;
    
    // Create a custom scrollTo function that can be accessed by other components
    (window as any).smoothScrollTo = (options: { top?: number, behavior?: string }) => {
      if (options.top !== undefined) {
        // Update target position for smooth scrolling
        targetScrollYRef.current = options.top;
      }
    };
    
    // Custom scroll to element function
    (window as any).smoothScrollToElement = (selector: string, offset = 0) => {
      const element = document.querySelector(selector);
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetTop = scrollTop + rect.top - offset;
        
        // Update target position for smooth scrolling
        targetScrollYRef.current = targetTop;
      }
    };

    return () => {
      // Restore original functions
      window.scrollTo = originalScrollTo;
      delete (window as any).smoothScrollTo;
      delete (window as any).smoothScrollToElement;
    };
  }, []);

  return (
    <>
      <div 
        className="smooth-wrapper"
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          overflow: 'hidden',
          pointerEvents: 'none', // Allow scrolling through the fixed container
          willChange: 'transform',
        }}
      >
        <div 
          ref={scrollContainerRef}
          className="smooth-content"
          style={{
            position: 'absolute',
            width: '100%',
            willChange: 'transform',
            transform: `translate3d(0, ${-scrollY}px, 0)`,
            pointerEvents: 'all', // Re-enable pointer events for content
          }}
        >
          <div ref={contentRef}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}