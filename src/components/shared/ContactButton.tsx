"use client";

import Link from "next/link";

type ContactButtonProps = {
  className?: string;
  variant?: 'primary' | 'secondary';
  text?: string;
};

export default function ContactButton({ 
  className = "", 
  variant = 'primary',
  text = "Contact Me"
}: ContactButtonProps) {
  // Smooth scroll handler function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust offset as needed
        behavior: 'smooth',
      });
    }
  };

  const baseStyles = "px-6 py-3 rounded-lg font-medium text-center transition-all";
  
  const variantStyles = {
    primary: "bg-primary text-white dark:bg-primary-foreground dark:text-primary hover:opacity-90 transition-opacity",
    secondary: "border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
  };
  
  return (
    <Link
      href="#contact"
      onClick={(e) => handleNavClick(e, "#contact")}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {text}
    </Link>
  );
}