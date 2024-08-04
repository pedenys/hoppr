import React, { useContext, useState } from "react";
import { RFC } from "react";

import { MusicPlayerContextType, MusicToPlay } from "./types";

const MusicPlayerContext =
  React.createContext<MusicPlayerContextType>(undefined);

export const MusicPlayer: RFC = ({ children }) => {
  const [musicToPlay, setMusicToPlay] = useState<
    MusicToPlay | null | undefined
  >(undefined);

  return (
    <MusicPlayerContext.Provider value={{ setMusicToPlay, musicToPlay }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const musicPlayerContext = useContext(MusicPlayerContext);

  if (!musicPlayerContext) {
    throw new Error(
      "MusicPlayer context must be used within a MusicPlayerContext provider",
    );
  }
  return musicPlayerContext;
};
