import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

const OG_SIZE = { width: 1200, height: 630 } as const;

function formatDate(date: string | null): string {
  if (!date) return 'FIELD NOTE';

  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return 'FIELD NOTE';

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
    .format(parsed)
    .toUpperCase();
}

export function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title')?.trim();

  if (!title) {
    return new Response('Missing required parameter: title', { status: 400 });
  }

  const safeTitle = title.slice(0, 110);
  const kind = (searchParams.get('kind')?.trim() || 'Engineering').slice(0, 30);
  const date = formatDate(searchParams.get('date'));
  const titleSize =
    safeTitle.length >= 70 ? 50 : safeTitle.length > 52 ? 58 : 68;

  return new ImageResponse(
    <main
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        background: '#0B0D12',
        color: '#E8EAF0',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          backgroundImage:
            'linear-gradient(120deg, rgba(43, 69, 255, 0.24), transparent 42%), linear-gradient(180deg, transparent 72%, rgba(91, 116, 255, 0.11))',
        }}
      />

      <div
        style={{
          position: 'absolute',
          right: -90,
          top: -155,
          width: 520,
          height: 520,
          display: 'flex',
          border: '1px solid rgba(91, 116, 255, 0.22)',
          borderRadius: 260,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 35,
          top: -30,
          width: 270,
          height: 270,
          display: 'flex',
          border: '1px solid rgba(91, 116, 255, 0.34)',
          borderRadius: 135,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 156,
          top: 91,
          width: 28,
          height: 28,
          display: 'flex',
          background: '#5B74FF',
          borderRadius: 14,
          boxShadow: '0 0 0 12px rgba(91, 116, 255, 0.12)',
        }}
      />

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '62px 72px 58px',
        }}
      >
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            fontSize: 20,
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: 13,
                height: 13,
                display: 'flex',
                marginRight: 16,
                background: '#5B74FF',
                borderRadius: 7,
              }}
            />
            <span style={{ color: '#E8EAF0', fontWeight: 700 }}>
              Asif Sadat
            </span>
            <span style={{ color: '#7B8194', marginLeft: 18 }}>/ Notes</span>
          </div>
          <span style={{ color: '#7B8194', fontSize: 17 }}>{date}</span>
        </header>

        <div
          style={{
            width: 88,
            height: 7,
            display: 'flex',
            marginTop: 74,
            flexShrink: 0,
            background: '#5B74FF',
            borderRadius: 4,
          }}
        />

        <h1
          style={{
            maxWidth: 1010,
            display: 'flex',
            flexShrink: 0,
            margin: '28px 0 0',
            fontSize: titleSize,
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: '-0.045em',
            textWrap: 'balance',
          }}
        >
          {safeTitle}
        </h1>

        <footer
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            marginTop: 'auto',
            paddingTop: 24,
            borderTop: '1px solid rgba(232, 234, 240, 0.16)',
            color: '#9AA0B1',
            fontSize: 19,
          }}
        >
          <span style={{ textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            {kind} note
          </span>
          <span style={{ color: '#E8EAF0', fontWeight: 600 }}>
            asifsadat.com
          </span>
        </footer>
      </div>
    </main>,
    {
      ...OG_SIZE,
      headers: {
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      },
    }
  );
}
