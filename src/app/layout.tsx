import React from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import './globals.css';
import '../styles/prism.css';
import { Analytics } from '@vercel/analytics/react';
import 'focus-visible';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'ASIF SADAT - Full Stack Developer',
  description:
    'Full Stack Developer with 7+ years of experience building scalable applications. Based in Dhaka, Bangladesh.',
  metadataBase: process.env.NEXT_PUBLIC_URL ? new URL(process.env.NEXT_PUBLIC_URL) : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} h-full antialiased`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="theme-color" content="#18181b" />
      </head>
      <body className="flex h-full flex-col bg-zinc-50 text-zinc-700 dark:bg-black dark:text-zinc-300">
        <ThemeProvider attribute="class">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
