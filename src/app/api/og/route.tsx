/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

const fontPromise = fetch(
  new URL('../../../../public/assets/font/Inter.ttf', import.meta.url)
).then(res => res.arrayBuffer());

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title');
  const description = searchParams.get('description');

  if (!title) {
    return new Response('Missing required parameter: title', { status: 400 });
  }

  const safeTitle = title.slice(0, 100);
  const safeDescription = description?.slice(0, 200) ?? null;

  let fontData: ArrayBuffer | undefined;
  try {
    fontData = await fontPromise;
  } catch {
    // ImageResponse falls back to its built-in font
  }

  return new ImageResponse(
    (
      <main tw="h-full w-full bg-[#FB2576] pb-1 flex flex-col">
        <div tw="w-full h-full flex flex-col items-start justify-start bg-zinc-900 text-zinc-100 p-8">
          <div tw="self-end text-2xl text-zinc-500">asifsadat.com</div>
          <div tw="w-full mt-auto flex items-start justify-start">
            <div tw="flex flex-col mt-auto max-w-2xl">
              <h1 tw="text-5xl mt-auto">{safeTitle}</h1>
              {safeDescription && (
                <h2 tw="text-2xl text-zinc-200">{safeDescription}</h2>
              )}
            </div>
            <img
              tw="rounded-lg w-32 h-32 self-end ml-auto"
              src="https://asifsadat.com/assets/blog/authors/asif-sadat.jpeg"
              alt="Avatar"
            />
          </div>
        </div>
      </main>
    ),
    {
      width: 1200,
      height: 630,
      fonts: fontData
        ? [{ name: 'Inter', data: fontData, style: 'normal' }]
        : [],
    }
  );
}
