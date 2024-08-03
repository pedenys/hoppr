import { Music } from "@/types/Music";

export type Props = Pick<Music, "id" | "title" | "isFavorite" | "url">;
