import type { AppProps } from 'next/app';
import React from 'react';

// FIXME: Headerをつける。
// FIXME: リセットCSSをかける。

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
