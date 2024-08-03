import { Artist } from "@/types/Artist";
import { Music } from "@/types/Music";

export type Album = {
  id: string;
  title: string;
  illustration: string;
  musics: Array<Music>;
  artists: Array<Artist>;
};
