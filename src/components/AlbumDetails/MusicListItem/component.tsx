import React, { FC } from "react";

import {
  useHandleOnMusicPlay,
  useToggleMusicFavoriteStatus,
} from "@/components/AlbumDetails/MusicListItem/hooks";

import { Props } from "./types";

export const MusicListItem: FC<Props> = ({ id, isFavorite, title, url }) => {
  const { handleOnMusicPlay } = useHandleOnMusicPlay();
  const { toggleMusicFavoriteStatus } = useToggleMusicFavoriteStatus();

  return (
    <div>
      <p>
        {title} — {isFavorite}
      </p>
      <div>
        <button onClick={() => handleOnMusicPlay()}>▶</button>
        <button onClick={() => toggleMusicFavoriteStatus()}>{}</button>
      </div>
    </div>
  );
};
