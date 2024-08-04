import { Nullable } from "@/types/Utilities";

export type MusicToPlay = {
  url: string;
  title: string;
  artist: string;
};

export type MusicPlayerContextType =
  | {
      setMusicToPlay: (musicToPlay: MusicToPlay | null) => void;
      musicToPlay: Nullable<MusicToPlay>;
    }
  | undefined;
