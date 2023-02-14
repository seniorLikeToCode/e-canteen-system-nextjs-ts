import '@/styles/globals.css'
import Head from 'next/head';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      </Head>
      <div className='h-screen overflow-hidden'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

/*

*/