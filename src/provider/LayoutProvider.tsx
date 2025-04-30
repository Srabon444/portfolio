"use client";

import { Poppins } from "next/font/google";
import React from "react";
import { Toaster } from "react-hot-toast";
import CopyrightFooter from "@/components/shared/CopyrightFooter";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster position="top-right" />
      <main className={`mx-auto min-h-screen ${poppins.className}`}>
        {children}
      </main>
      <CopyrightFooter />
    </>
  );
}
