import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import LayoutProvider from "@/provider/LayoutProvider";
import { Oswald, Poppins } from 'next/font/google';

const oswald = Oswald({
  weight: ['600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
});

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Ashraful Islam - Full Stack Developer",
  description: "Professional portfolio of Ashraful Islam, Full Stack Developer specializing in modern web technologies.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Ashraful Islam" />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${oswald.variable} ${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
