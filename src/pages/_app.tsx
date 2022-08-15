import type { AppProps } from 'next/app';
import NextHead from 'next/head';
import React from 'react';

import 'modern-css-reset';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead>
        <meta charSet="utf-8" />
        <title>THE ROASTERY MAP</title>
        <link rel="icon" sizes="32x32" href="/public/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="お気に入りのコーヒーロースターをさがそう!"
        />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="THE ROASTERY MAP" />
        <meta name="thumbnail" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </NextHead>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
