import Head from 'next/head';
import { ColorThemeProvider } from '../contexts/colorTheme';

import '../styles/globals.css';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sebastián González</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <ColorThemeProvider>
          <Navbar />
          <Component {...pageProps} />
        </ColorThemeProvider>
      </main>
    </>
  );
}

export default MyApp;
