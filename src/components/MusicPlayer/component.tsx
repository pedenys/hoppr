import React from "react";

import { useMusicPlayer } from "@/contexts/musicPlayer";

import styles from "./styles.module.css";

export const MusicPlayer = () => {
  const { setMusicToPlay, musicToPlay } = useMusicPlayer();
  const closePlayer = () => {
    setMusicToPlay(null);
  };

  if (!musicToPlay) {
    return null;
  }

  return (
    <div className={styles.container}>
      <button onClick={closePlayer} className={styles.closePlayer}>
        ❌
      </button>
      <div>
        <p>{musicToPlay.artist}</p>
        <p>{musicToPlay.title}</p>
      </div>

      <iframe
        width='100%'
        height='300'
        // src={musicToPlay.url}
        src='https://www.youtube.com/embed/dqZ8vr_Q4UI?si=KlgxieNApfXyQajP?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1&enablejsapi=1&wmode=opaque'
        title={musicToPlay.title}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
        referrerPolicy='strict-origin-when-cross-origin'
      ></iframe>
    </div>
  );
};
