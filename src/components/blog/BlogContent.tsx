'use client';

import React from 'react';
import { BlogSection, CodeBlock } from '@/data/blogs/blogData';
import CodeHighlight from './CodeHighlight';

interface BlogContentProps {
  sections: BlogSection[];
}

const BlogContent: React.FC<BlogContentProps> = ({ sections }) => {
  const renderSection = (section: BlogSection, index: number) => {
    switch (section.type) {
      case 'heading':
        const headingLevel = section.level || 2;
        const headingClassMap = {
          1: 'text-4xl font-bold mb-6 mt-8',
          2: 'text-3xl font-semibold mb-4 mt-6',
          3: 'text-2xl font-medium mb-3 mt-5'
        };
        
        // Create the heading element based on the level
        if (headingLevel === 1) {
          return (
            <h1 key={`heading-${index}`} className={headingClassMap[1]}>
              {section.content as string}
            </h1>
          );
        } else if (headingLevel === 2) {
          return (
            <h2 key={`heading-${index}`} className={headingClassMap[2]}>
              {section.content as string}
            </h2>
          );
        } else {
          return (
            <h3 key={`heading-${index}`} className={headingClassMap[3]}>
              {section.content as string}
            </h3>
          );
        }
        
      case 'paragraph':
        return (
          <p key={`paragraph-${index}`} className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
            {section.content as string}
          </p>
        );
        
      case 'code':
        return (
          <CodeHighlight 
            key={`code-${index}`} 
            codeBlock={section.content as CodeBlock} 
          />
        );
        
      case 'list':
        const items = section.content as string[];
        if (section.ordered) {
          return (
            <ol key={`list-${index}`} className="list-decimal ml-6 mb-6 space-y-2">
              {items.map((item, itemIndex) => (
                <li key={`item-${index}-${itemIndex}`} className="text-gray-800 dark:text-gray-300">
                  {item}
                </li>
              ))}
            </ol>
          );
        } else {
          return (
            <ul key={`list-${index}`} className="list-disc ml-6 mb-6 space-y-2">
              {items.map((item, itemIndex) => (
                <li key={`item-${index}-${itemIndex}`} className="text-gray-800 dark:text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        
      default:
        return null;
    }
  };

  return (
    <div className="blog-content">
      {sections.map((section, index) => renderSection(section, index))}
    </div>
  );
};

export default BlogContent;