"use client";

import { useState, useEffect } from "react";
import Container from "../shared/Container";
import Loading from "../shared/Loading";
import { motion } from "framer-motion";

interface Quote {
  text: string;
  author: string;
}

const defaultQuotes: Quote[] = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Quality is not an act, it is a habit.",
    author: "Aristotle",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
];

export default function Quote() {
  const [quote, setQuote] = useState<Quote>(defaultQuotes[0]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      // Using API Ninja without the category parameter which is premium-only
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
          'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY || '',
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        // API Ninja returns an array of quotes, we take the first one
        if (data && data.length > 0) {
          setQuote({ 
            text: data[0].quote, 
            author: data[0].author 
          });
        } else {
          // If API returns empty result, use a random quote from our default list
          const randomIndex = Math.floor(Math.random() * defaultQuotes.length);
          setQuote(defaultQuotes[randomIndex]);
        }
      } else {
        // If API fails, use a random quote from our default list
        console.error("API response not OK:", await response.text());
        const randomIndex = Math.floor(Math.random() * defaultQuotes.length);
        setQuote(defaultQuotes[randomIndex]);
      }
    } catch (error) {
      // If fetch fails, use a random quote from our default list
      const randomIndex = Math.floor(Math.random() * defaultQuotes.length);
      setQuote(defaultQuotes[randomIndex]);
      console.error("Error fetching quote:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
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
          {isLoading ? (
            <Loading />
          ) : (
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
                onClick={fetchQuote}
                className="mt-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                disabled={isLoading}
              >
                New Quote
              </button>
            </>
          )}
        </motion.div>
      </Container>
    </section>
  );
}