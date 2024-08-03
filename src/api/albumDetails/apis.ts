import { FeAlbumDetails } from "@/types/FeAlbumDetails";

const MOCK_ALBUM_DETAILS: FeAlbumDetails = {
  title: "album title 1",
  artist: "artist 1",
  cover: "",
  musics: [
    {
      id: "1",
      isFavorite: false,
      title: "music title 1",
      playMusicUrl: "https://www.example.com",
    },
  ],
};

export const getAlbumDetails = (): Promise<FeAlbumDetails> => {
  const a = new Promise<FeAlbumDetails>((resolve) =>
    resolve(MOCK_ALBUM_DETAILS),
  );

  return a;
};
