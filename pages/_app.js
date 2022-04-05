import Head from 'next/head';

import '../styles/globals.css';
import '../styles/fades.css';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sebastián González</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@sebastiangon11" />
        <meta name="twitter:site" content="@sebastiangon11" />
      </Head>

      <main className="container max-w-7xl md:mx-auto">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
