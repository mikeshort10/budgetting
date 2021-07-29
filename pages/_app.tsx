import "../public/index.css";
import React from "react";
import type { AppProps /* , AppContext */ } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://qhbu2ucdjnhfthvuco4swnhdb4.appsync-api.us-east-1.amazonaws.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
