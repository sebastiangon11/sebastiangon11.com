import Head from 'next/head';
import { ColorThemeButton } from '../components/theming/ThemeButton';
import { ColorThemeProvider } from '../contexts/colorTheme';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script async src="https://buttons.github.io/buttons.js"></script>
        <title>Sebastián González</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <ColorThemeProvider>
          <ColorThemeButton />
          <Component {...pageProps} />
        </ColorThemeProvider>
      </main>
    </>
  );
}

export default MyApp;
