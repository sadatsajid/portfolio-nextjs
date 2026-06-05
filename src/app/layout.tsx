import React from 'react';
import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/react';
import 'focus-visible';

import { EditorialNav } from '@/components/editorial/Nav';
import { EditorialFooter } from '@/components/editorial/Footer';
import { Providers } from '@/components/Providers';
import { fontDisplay, fontBody, fontSerif } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Asif Sadat — Staff Software Engineer',
  description:
    'Staff engineer who reads the P&L before the PRD. Seven years building back-office systems, sales engines, and AI tools that move metrics.',
  metadataBase: process.env.NEXT_PUBLIC_URL
    ? new URL(process.env.NEXT_PUBLIC_URL)
    : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="theme-color" content="#0B0D12" />
      </head>
      <body className="flex min-h-screen flex-col bg-paper text-ink">
        <Providers>
          <EditorialNav />
          <main className="flex-1">{children}</main>
          <EditorialFooter />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
