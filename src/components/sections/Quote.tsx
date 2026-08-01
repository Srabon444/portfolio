"use client";

import { useState, useEffect } from "react";
import Container from "../shared/Container";
import SmoothScrollReveal from "../shared/SmoothScrollReveal";
import { inspirationalQuotes, Quote as QuoteType } from "@/data/quotesData";

export default function Quote() {
  const [quote, setQuote] = useState<QuoteType>(inspirationalQuotes[0]);

  useEffect(() => {
    setQuote(inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)]);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-primary/5 border-y border-primary/10">
      <Container>
        <SmoothScrollReveal className="max-w-2xl mx-auto text-center">
          <svg
            className="w-8 h-8 text-primary/40 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-base md:text-lg lg:text-xl font-medium mb-4 leading-relaxed text-foreground">
            {quote.text}
          </p>
          <p className="text-sm text-muted-foreground">— {quote.author}</p>
        </SmoothScrollReveal>
      </Container>
    </section>
  );
}
