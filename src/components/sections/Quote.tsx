"use client";

import { useState, useEffect } from "react";
import Container from "../shared/Container";
import { motion } from "framer-motion";
import { inspirationalQuotes, Quote as QuoteType } from "@/data/quotesData";

export default function Quote() {
  const [quote, setQuote] = useState<QuoteType>(inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
    setQuote(inspirationalQuotes[randomIndex]);
  };

  useEffect(() => {
    // Set a random quote on initial load
    getRandomQuote();
  }, []);

  return (
    <section className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <>
            <svg 
              className="w-8 h-8 text-primary dark:text-blue-300 mx-auto mb-4" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl font-medium mb-4 leading-relaxed">
              {quote.text}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              — {quote.author}
            </p>
            <button 
              onClick={getRandomQuote}
              className="mt-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              New Quote
            </button>
          </>
        </motion.div>
      </Container>
    </section>
  );
}