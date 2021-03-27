import "../public/index.css";
import React from "react";
import type { AppProps /* , AppContext */ } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
