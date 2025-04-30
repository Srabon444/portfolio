import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Poppins } from "next/font/google";
import LayoutProvider from "@/provider/LayoutProvider";
import ReactQueryProvider from "@/provider/QueryClientProvider";

export const metadata: Metadata = {
  title: "Ashraful Portfolio",
  description: "This is Ashraful's portfolio",
};

const poppins = Poppins({ subsets: ["latin"], weight: "400", display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="light"
      style={{ colorScheme: "light" }}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="ASHRAFUL" />
      </head>
      <body
        className={poppins.className}
        style={{
          colorScheme: "light",
          backgroundColor: "var(--background)",
          color: "var(--text)",
        }}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <ReactQueryProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
