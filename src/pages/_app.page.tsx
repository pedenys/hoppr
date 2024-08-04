import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { MusicPlayer } from "@/contexts/musicPlayer";
import { QueryProvider } from "@/contexts/queryProvider";
import { MusicPlayerLayout } from "@/layouts/MusicPlayer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryProvider>
      <MusicPlayer>
        <MusicPlayerLayout>
          <Component {...pageProps} />
        </MusicPlayerLayout>
      </MusicPlayer>
    </QueryProvider>
  );
};

export default App;
