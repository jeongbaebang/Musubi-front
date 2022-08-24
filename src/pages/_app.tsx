import Head from "next/head";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "src/theme/theme";
import Layout from "src/components/layout";
import createEmotionCache from "src/lib/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: React.FC<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
