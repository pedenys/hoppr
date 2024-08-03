type FeMusicInAlbumDetails = {
  id: string;
  title: string;
  playMusicUrl: string;
  isFavorite: boolean;
};

export type FeAlbumDetails = {
  title: string;
  cover: string;
  artist: string;
  musics: Array<FeMusicInAlbumDetails>;
};
