import React, { FC } from "react";

import {
  useHandleOnMusicPlay,
  useToggleMusicFavoriteStatus,
} from "@/components/AlbumDetails/MusicListItem/hooks";

import styles from "./styles.module.css";
import { Props } from "./types";

export const MusicListItem: FC<Props> = ({
  id,
  isFavorite,
  title,
  playContentUrl,
  artist,
}) => {
  const { handleOnMusicPlay } = useHandleOnMusicPlay();
  const { toggleMusicFavoriteStatus } = useToggleMusicFavoriteStatus();

  const playMusic = (
    music: Parameters<
      ReturnType<typeof useHandleOnMusicPlay>["handleOnMusicPlay"]
    >[0],
  ) => handleOnMusicPlay(music);

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <div className={styles.actions}>
        <button
          onClick={() => playMusic({ title, url: playContentUrl, artist })}
        >
          ▶
        </button>
        <button onClick={() => toggleMusicFavoriteStatus()}>
          {isFavorite ? "🖤" : "🩶"}
        </button>
      </div>
    </div>
  );
};
