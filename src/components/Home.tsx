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
import { Suspense } from "react";
import Loading from "@/components/shared/Loading";

export default function Home() {
  return (
    <>
      <Navigation />
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
      <ScrollToTop />
    </>
  );
}
