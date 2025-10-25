import { NextResponse } from 'next/server';

import RSS from 'rss';

export async function GET() {
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
