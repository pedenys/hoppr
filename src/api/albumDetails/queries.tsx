import { useQuery } from "react-query";

import { getApiAlbumDetails } from "@/api/albumDetails/apis";
import { fromApiAlbumDetailsToFeAlbumDetails } from "@/api/albumDetails/mappers";
import { API_ROUTES } from "@/api/routes";

export const useGetAlbumDetails = ({ albumId }: { albumId: string }) => {
  return useQuery({
    queryKey: [API_ROUTES.ALBUM_DETAILS(albumId)],
    enabled: Boolean(albumId),
    queryFn: async () => {
      const apiAlbumDetails = await getApiAlbumDetails({ albumId });

      return fromApiAlbumDetailsToFeAlbumDetails(apiAlbumDetails);
    },
  });
};
