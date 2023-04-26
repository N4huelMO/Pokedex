import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

import { ApolloProvider } from "@apollo/client/react";
import { client } from "../graphql/queries";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={rubik.className}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </main>
  );
}
