"use client";

import { useEffect, useState } from 'react';
import { highlightCode } from '@/lib/shiki-highlighter';
import { useTheme } from 'next-themes';
import { CodeBlock } from '@/data/blogs/blogData';

interface CodeHighlightProps {
  codeBlock: CodeBlock;
}

const CodeHighlight: React.FC<CodeHighlightProps> = ({ codeBlock }) => {
  const [highlightedCode, setHighlightedCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { theme } = useTheme();
  
  useEffect(() => {
    const loadHighlightedCode = async () => {
      setIsLoading(true);
      try {
        // Determine if we're using dark or light mode
        const colorMode = theme === 'dark' || 
          (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) 
          ? 'dark' 
          : 'light';
        
        const html = await highlightCode(
          codeBlock.code,
          codeBlock.language,
          colorMode as 'dark' | 'light'
        );
        setHighlightedCode(html);
      } catch (error) {
        console.error('Failed to highlight code:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadHighlightedCode();
  }, [codeBlock, theme]);

  // Loading state
  if (isLoading) {
    return (
      <div className="relative rounded-lg bg-gray-800 dark:bg-gray-900 text-white p-4 mb-6">
        <div className="absolute top-0 right-0 bg-gray-700 dark:bg-gray-800 px-3 py-1 text-xs rounded-bl-lg rounded-tr-lg font-mono">
          {codeBlock.language}
        </div>
        <div className="animate-pulse flex space-x-4">
          <div className="space-y-2 flex-1 py-3">
            <div className="h-2 bg-gray-700 dark:bg-gray-700 rounded"></div>
            <div className="h-2 bg-gray-700 dark:bg-gray-700 rounded w-5/6"></div>
            <div className="h-2 bg-gray-700 dark:bg-gray-700 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative code-block-wrapper mb-6">
      {/* Language tag */}
      <div className="absolute top-0 right-0 bg-gray-700 dark:bg-gray-800 text-white text-xs font-mono px-3 py-1 rounded-bl-lg rounded-tr-lg z-10">
        {codeBlock.language}
      </div>
      
      {/* Code content */}
      <div 
        className="shiki-wrapper overflow-x-auto rounded-lg"
        dangerouslySetInnerHTML={{ __html: highlightedCode }} 
      />
      
      {/* Custom styles for Shiki code blocks */}
      <style jsx global>{`
        .shiki-wrapper {
          position: relative;
        }
        
        .shiki {
          margin: 0;
          padding: 1rem;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          line-height: 1.5;
          overflow-x: auto;
          background-color: #0d1117 !important; /* Ensure dark background in dark mode */
        }
        
        .dark .shiki {
          background-color: #0d1117 !important;
        }
        
        /* Additional styling for code line numbers */
        .code-line {
          display: block;
          padding-left: 1rem;
          padding-right: 1rem;
          margin-left: -1rem;
          margin-right: -1rem;
        }
      `}</style>
    </div>
  );
};

export default CodeHighlight;