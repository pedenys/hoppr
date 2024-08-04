import { MusicToPlay } from "@/contexts/musicPlayer/types";

export type Props = {
  title: string;
  id: string;
  isFavorite: boolean;
  playContentUrl: string;
  artist: string;
};

export type OnMusicToPlayArgument = MusicToPlay;
