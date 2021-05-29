import { AppProps } from "next/app";
import Head from "next/head";

import { AuthProvider } from "src/contexts";

import "styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>Reel Estate</title>
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
