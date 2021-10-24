import { AppProps } from "next/app";
import Head from "next/head";

import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "src/contexts";

import theme from "src/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Head>
          <title>Reel Estate</title>
        </Head>

        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}
