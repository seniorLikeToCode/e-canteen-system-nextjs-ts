import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (<Html>
    <Head>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />

      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon.png"></link>
      <meta name="theme-color" content="#FF9501" />

      <meta name="application-name" content="E-Canteen" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="E-Canteen" />
      <meta name="description" content="E-Canteen" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      {/* <meta name="msapplication-config" content="/icons/browserconfig.xml" /> */}
      <meta name="msapplication-TileColor" content="#FF0000" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>);
}
