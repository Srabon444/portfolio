"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import { TOAST_DURATION_MS } from "@/lib/constants";

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
          duration: TOAST_DURATION_MS,
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
