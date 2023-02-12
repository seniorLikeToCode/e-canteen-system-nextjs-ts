import '@/styles/globals.css'
import Head from 'next/head';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#FF9501" />
      </Head>
      <div className='h-screen'>
        <Component {...pageProps} />
      </div>
    </>
  );
}
