"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'var(--color-card)',
            color: 'var(--color-card-foreground)',
            border: '1px solid var(--color-border)',
          },
        }} 
      />
      <main className="mx-auto min-h-screen">
        {children}
      </main>
    </>
  );
}
