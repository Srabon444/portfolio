"use client";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Quote from "@/components/sections/Quote";
import Navigation from "@/components/shared/Navigation";
import CopyrightFooter from "@/components/shared/CopyrightFooter";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { Suspense, useState } from "react";
import Loading from "@/components/shared/Loading";
import IntroScreen from "./IntroScreen";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}

      <div
        className={`${showIntro ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}
      >
        <Navigation />
        <main>
          <Suspense fallback={<Loading />}>
            <Hero />
            <Stats />
            <Skills />
            <Experience />
            <Projects />
            <Quote />
            <Contact />
          </Suspense>
        </main>
        <CopyrightFooter />
        <ScrollToTop />
      </div>
    </>
  );
}
