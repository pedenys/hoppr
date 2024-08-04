import { ApiAlbumDetails } from "@/api/albumDetails/types";
import { httpGet } from "@/api/client";
import { API_ROUTES } from "@/api/routes";

export const getApiAlbumDetails = ({
  albumId,
}: {
  albumId: string;
}): Promise<ApiAlbumDetails> => {
  return httpGet<ApiAlbumDetails>(API_ROUTES.ALBUM_DETAILS(albumId));
};
