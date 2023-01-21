/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from 'next/app';
import { lightTheme } from '@theme';
import { ThemeProvider } from '@mui/material';
import Head from 'next/head';
import './../styles/global.css';
import { LoginLayout } from '@components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Saayam</title>
      </Head>
      <ThemeProvider theme={lightTheme}>
        <LoginLayout>
          <Component {...pageProps} />
        </LoginLayout>
      </ThemeProvider>
    </>
  );
}
