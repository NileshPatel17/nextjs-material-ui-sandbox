import React, { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

import { lightTheme } from '../theme';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  function handleExitComplete() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>Multi-Step Form</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <SessionProvider session={pageProps.session}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            {getLayout(<Component {...pageProps} />)}
          </AnimatePresence>
        </SessionProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
