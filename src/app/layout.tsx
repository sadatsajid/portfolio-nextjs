import React from 'react';
import type { Metadata, Viewport } from 'next';

import { Analytics } from '@vercel/analytics/react';
import 'focus-visible';

import { EditorialNav } from '@/components/editorial/Nav';
import { EditorialFooter } from '@/components/editorial/Footer';
import { RevealObserver } from '@/components/editorial/RevealObserver';
import { Providers } from '@/components/Providers';
import { UmamiAnalytics } from '@/components/UmamiAnalytics';
import { fontDisplay, fontBody, fontSerif } from './fonts';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_URL ?? 'https://www.asifsadat.com';
const SITE_TITLE = 'Asif Sadat | Staff Software Engineer';
const SITE_DESCRIPTION =
  'Staff engineer who reads the P&L before the PRD. Seven years building back-office systems, sales engines, and AI tools that move metrics.';

const homeOgImage = new URL('/api/og', SITE_URL);
homeOgImage.searchParams.set('variant', 'home');
homeOgImage.searchParams.set(
  'title',
  'I turn business problems into shipped software.'
);
const homeOgAlt = 'Asif Sadat: I turn business problems into shipped software.';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Asif Sadat',
    type: 'website',
    images: [
      {
        url: homeOgImage,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: homeOgAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: homeOgImage, alt: homeOgAlt }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F5F7' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0D12' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
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
      </head>
      <body id="top" className="bg-paper text-ink flex min-h-screen flex-col">
        <a
          href="#main"
          className="bg-accent text-paper font-heading sr-only z-50 rounded-full px-5 py-3 text-[14px] font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Providers>
          <EditorialNav />
          <main id="main" tabIndex={-1} className="min-w-0 flex-1 outline-none">
            {children}
          </main>
          <RevealObserver />
          <EditorialFooter />
          <Analytics />
          <UmamiAnalytics />
        </Providers>
      </body>
    </html>
  );
}
