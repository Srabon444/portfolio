'use client';

import "../globals.css";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <style jsx global>{`
        /* Custom styling for blog content */
        .shiki {
          background-color: #0d1117 !important; /* Dark background for code blocks */
          border-radius: 0.5rem;
          margin: 1.5rem 0;
          overflow: hidden;
        }
        
        /* Ensure page fills viewport height for proper footer positioning */
        html, body {
          height: 100%;
        }
        
        /* Fix footer to always be at the bottom */
        main.min-h-screen {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .flex-grow {
          flex: 1;
        }
      `}</style>
    </>
  );
}