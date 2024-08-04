import { useMusicPlayer } from "@/contexts/musicPlayer";

import { OnMusicToPlayArgument } from "./types";

export const useHandleOnMusicPlay = () => {
  const { setMusicToPlay } = useMusicPlayer();

  const handleOnMusicPlay = (musicToPlay: OnMusicToPlayArgument) => {
    setMusicToPlay({ ...musicToPlay });
  };

  return { handleOnMusicPlay };
};

export const useToggleMusicFavoriteStatus = () => {
  const toggleMusicFavoriteStatus = () => {};

  return { toggleMusicFavoriteStatus };
};
