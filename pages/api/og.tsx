// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ImageResponse } from '@vercel/og';
import Favicon from '@/components/icons/Favicon';


type Data = {
  name: string
}

export const config = {
  runtime: 'edge',
};

const font = fetch(
  new URL("/public/mplus1.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const f = await font;
  const { searchParams } = req.url ? new URL(req.url) : { searchParams: null };
  const title = searchParams && searchParams.get('title') || null;
  return new ImageResponse(
    (
      <div tw='flex h-full w-full flex-col items-center justify-center bg-white text-gray-600'>
        {title && <div
          tw='mb-20 flex w-[80%] items-center justify-center break-all text-5xl'>{title}</div>}
        <div
          tw='text-6xl gap-2 flex items-center justify-center'
        >
          <span tw='mr-5'>Lexical Traning</span>
          <Favicon />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [{
        data: f,
        name: 'MPLUS1'
      }]
    },
  );
}
