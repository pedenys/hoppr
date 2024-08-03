import { ApiAlbumDetails } from "@/api/albumDetails/types";
import { FeAlbumDetails } from "@/types/FeAlbumDetails";

const getMusicIsFavorite = ({ musicId }: { musicId: string }) => {
  return false;
};

export const fromApiAlbumDetailsToFeAlbumDetails = (
  apiAlbumDetails: ApiAlbumDetails,
): FeAlbumDetails => {
  return {
    artist: apiAlbumDetails.Artists.map(
      (apiArtist) => apiArtist.Artist_Name,
    ).join("; "),
    cover: apiAlbumDetails.Album_Cover,
    title: apiAlbumDetails.Album_Title,
    musics: apiAlbumDetails.Musics.map((apiMusic) => ({
      id: String(apiMusic.Music_ID),
      title: apiMusic.Music_Title,
      playMusicUrl: apiMusic.Music_Url,
      isFavorite: getMusicIsFavorite({ musicId: String(apiMusic.Music_ID) }),
    })),
  };
};
