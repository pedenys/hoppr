import { NextPage } from "next";

import { fromApiAlbumDetailsToFeAlbumDetails } from "@/api/albumDetails/mappers";

import { MOCK_API_ALBUM_DETAILS } from "../../../../mocks/albumDetails";

const AlbumDetailsPage: NextPage = () => {
  const albumDetails = fromApiAlbumDetailsToFeAlbumDetails(
    MOCK_API_ALBUM_DETAILS,
  );

  return (
    <>
      <h1 data-testid='album-details__title'>{albumDetails?.title}</h1>
      <img
        data-testid='albums-details__album_cover'
        src={albumDetails?.cover}
        alt={""}
      />
      <div data-testid='albums-details__musics_container'>
        {albumDetails?.musics?.map((music) => (
          <p key={music.id} role='listitem'>
            {music.title}
          </p>
        ))}
      </div>
    </>
  );
};

export default AlbumDetailsPage;
