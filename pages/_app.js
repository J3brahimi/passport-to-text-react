import Head from "next/head";
import { appWithTranslation, useTranslation } from "next-i18next";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "theme";
import "styles/globals.scss";
import "styles/font/vazir-font.scss";
import { useEffect } from "react";

import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const isBrowser = typeof document !== "undefined";
let insertionPoint;

if (isBrowser) {
  const emotionInsertionPoint = document.querySelector(
    'meta[name="emotion-insertion-point"]',
  );
  insertionPoint = emotionInsertionPoint ?? undefined;
}

const cacheRtl = createCache({
  key: "mui-style-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
  insertionPoint,
});

const cacheLtr = createCache({
  key: "mui-style-ltr",
  insertionPoint,
});

function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CacheProvider value={cacheLtr}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
