import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

// リセットCSS(https://github.com/hankchizljaw/modern-css-reset)
import 'modern-css-reset';

// FIXME: Header情報を修正する。

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>THE ROASTERY MAP</title>
        <link rel="icon" sizes="32x32" href="/public/favicon.ico" />
        <meta
          name="description"
          content="お気に入りのコーヒーロースターをさがそう"
        />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="THE ROASTERY MAP" />
        <meta name="thumbnail" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
