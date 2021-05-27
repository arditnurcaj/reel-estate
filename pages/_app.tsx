import { AppProps } from "next/app";
import Head from "next/head";

import "styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Reel Estate</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
