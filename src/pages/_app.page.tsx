import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { QueryProvider } from "@/contexts/queryProvider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryProvider>
      <Component {...pageProps} />
    </QueryProvider>
  );
};

export default App;
