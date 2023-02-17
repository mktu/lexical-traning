import Link from 'next/link';
import { ReactElement } from 'react';

import Layout from '@/components/Layout';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <div className='flex min-h-[512px] flex-col gap-2'>
      <h1 className='text-xl text-gray-500'>Contents</h1>
      <ul className='pl-8'>
        <li className='list-disc'>
          <Link href={'/link-example'}>
            Lexicalを使ってリッチエディタを実現する（Link編）
          </Link>
        </li>
      </ul>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title='Lexical Traning'
      description='Lexicalの練習用サイトです'
      ogText='Lexicalの練習用サイトです'
    >
      {page}
    </Layout>
  );
};

export default Home;
