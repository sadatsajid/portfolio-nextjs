import React from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Providers } from '../components/Providers';
import './globals.css';
import '../styles/prism.css';
import { Analytics } from '@vercel/analytics/react';
import 'focus-visible';
import { GeistSans } from 'geist/font/sans';

export const metadata = {
  title: 'Asif Sadat - Full Stack Developer',
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
    <html lang="en" className={`${GeistSans.className} h-full antialiased`} suppressHydrationWarning>
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
        <Providers>
          {/* Background gradient effect */}
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-red-100 to-orange-100 opacity-20 blur-3xl dark:from-red-900 dark:to-orange-900 dark:opacity-10" />
            <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-20 blur-3xl dark:from-blue-900 dark:to-purple-900 dark:opacity-10" />
          </div>
          <div className="relative">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
