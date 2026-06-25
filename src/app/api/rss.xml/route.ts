import { NextResponse } from 'next/server';

import RSS from 'rss';

import { getAllNotes } from '@/lib/notes';

const SITE_URL = process.env.NEXT_PUBLIC_URL ?? 'https://asifsadat.com';

export async function GET() {
  const feed = new RSS({
    title: 'Asif Sadat — Writing',
    description: 'Stories from the work — systems, decisions, and lessons learned the hard way.',
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/api/rss.xml`,
    language: 'en',
  });

  for (const note of getAllNotes()) {
    feed.item({
      title: note.title,
      description: note.description,
      url: `${SITE_URL}/notes/${note.slug}`,
      guid: note.slug,
      date: note.date,
      categories: [note.kind],
    });
  }

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  });
}
