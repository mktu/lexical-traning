import type { NextApiRequest } from 'next';
import { ImageResponse } from '@vercel/og';
import Favicon from '@/components/icons/Favicon';

export const config = {
  runtime: 'edge',
};

export default async function handler(
  req: NextApiRequest,
) {
  return new ImageResponse(
    (
      <div tw='flex h-full w-full flex-col items-center justify-center bg-white'>
        <div
          tw='text-7xl gap-2 flex items-center justify-center'
        >
          <span tw='mr-5'>Lexical Traning</span>
          <Favicon />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
