import Head from 'next/head';
import { ColorThemeButton } from '../components/theming/ThemeButton';
import { ColorThemeProvider } from '../contexts/colorTheme';
import { LinkedinBadge } from '../components/bio/LinkedinBadge';
import { GithubBadge } from '../components/bio/GithubBadge';

import '../styles/globals.css';

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
          <div className="flex flex-row justify-between">
            <ColorThemeButton />
            <div className="flex">
              <LinkedinBadge />
              <GithubBadge />
            </div>
          </div>
          <Component {...pageProps} />
        </ColorThemeProvider>
      </main>
    </>
  );
}

export default MyApp;
