import type { AppProps } from "next/app";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import { basicTheme } from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>타이틀 테스트</title>
        <meta property="etc"></meta>
      </Head>
      <ThemeProvider theme={basicTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
