import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className, id }: ContainerProps) {
  return (
    <div
      id={id}
      className={cn(
        "w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}
