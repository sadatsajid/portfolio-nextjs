import { NextResponse } from 'next/server';

import { notesApi } from '../../../lib/notesApi';
import RSS from 'rss';

export async function GET() {
  // Check if notesApi is available (not null)
  if (!notesApi) {
    console.warn('notesApi is not available, returning empty RSS feed');
    const emptyFeed = new RSS({
      title: 'Asif Sadat - Notes (Coming Soon)',
      site_url: 'https://asifsadat.com',
      feed_url: 'https://asifsadat.com/rss.xml',
    });
    
    return new NextResponse(emptyFeed.xml({ indent: true }), {
      headers: {
        'Content-Type': 'text/xml',
        'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
      },
    });
  }

  const feed = new RSS({
    title: 'Asif Sadat',
    site_url: 'https://asifsadat.com',
    feed_url: 'https://asifsadat.com/rss.xml',
  });

  const allPosts = await notesApi.getNotes();
  allPosts.map(post => {
    feed.item({
      title: post.title,
      url: `https://asifsadat.com/notes/${post.slug}`,
      date: post.publishedAt,
      description: post.description,
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  });
}
