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
import { Suspense, useState } from "react";
import Loading from "@/components/shared/Loading";
import IntroScreen from "./IntroScreen";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
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
              <Experience />
              <Projects />
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
