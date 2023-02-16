import '@/styles/globals.css';

import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

import type { AppProps } from 'next/app';
import Fonts from '@/components/Fonts';
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Fonts>
      <Component {...pageProps} />
    </Fonts>
  );
}
