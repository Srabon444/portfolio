"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Quote from "@/components/sections/Quote";
import Navigation from "@/components/shared/Navigation";
import CopyrightFooter from "@/components/shared/CopyrightFooter";
import ScrollToTop from "@/components/shared/ScrollToTop";
import ScrollWrapper from "@/components/shared/ScrollWrapper";
import { Suspense, useState, useEffect } from "react";
import Loading from "@/components/shared/Loading";
import IntroScreen from "./IntroScreen";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import AnimatedCursor with SSR disabled to prevent hydration errors
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  // Enable custom cursor after intro completes
  useEffect(() => {
    if (!showIntro) {
      setShowCustomCursor(true);
    }
  }, [showIntro]);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {/* Custom cursor shown after intro completes */}
      {showCustomCursor && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color="0, 0, 0"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={1.5}
          trailingSpeed={8}
          innerStyle={{
            mixBlendMode: 'difference',
            backgroundColor: '#fff'
          }}
          outerStyle={{
            mixBlendMode: 'difference',
            border: '1.5px solid #fff'
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
      )}

      <AnimatePresence>
        {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      </AnimatePresence>
      
      <div className={`${showIntro ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}>
        <Navigation />
        <ScrollWrapper>
          <main>
            <Suspense fallback={<Loading />}>
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Quote />
              <Skills />
              <Contact />
            </Suspense>
          </main>
          <CopyrightFooter />
        </ScrollWrapper>
        <ScrollToTop />
      </div>
    </>
  );
}
