import React, { RFC } from "react";

import { MusicPlayer } from "@/components/MusicPlayer";
import { useMusicPlayer } from "@/contexts/musicPlayer";

import styles from "./styles.module.css";

export const MusicPlayerLayout: RFC = ({ children }) => {
  const { musicToPlay } = useMusicPlayer();

  if (!musicToPlay) {
    return children;
  }

  return (
    <>
      {children}
      <div className={styles.container}>
        <MusicPlayer />
      </div>
    </>
  );
};
