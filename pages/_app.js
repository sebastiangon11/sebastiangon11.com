import Head from 'next/head';
import { useEffect } from 'react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  return (
    <>
      <Head>
        <script async src="https://buttons.github.io/buttons.js"></script>
        <title>Sebastián González</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
